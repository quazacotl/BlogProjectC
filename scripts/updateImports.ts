import {Project} from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isAbsolute(value: string) {
	const layers = ['shared', 'app', 'entities', 'features', 'widgets', 'pages']
	// if (layers.some(item => value.startsWith()))
	return layers.some(layer => value.startsWith(layer))
}

files.forEach(file => {
	const importDeclarations = file.getImportDeclarations()

	importDeclarations.forEach(declaration => {
		const value = declaration.getModuleSpecifierValue()
		isAbsolute(value) && declaration.setModuleSpecifier(`@/${value}`)
	})
})

project.save();