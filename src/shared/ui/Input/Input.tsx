import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string,
	value?: string,
	onChange?: (value: string) => void
}


export const Input = memo((props: InputProps) => {
	Input.displayName = 'Input'
	const {className, onChange, value, type = 'text', placeholder,  autoFocus,  ...rest} = props

	const [focused, setFocused] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)
	const ref = useRef<HTMLInputElement>()


	useEffect(() => {
		if (autoFocus) {
			setFocused(true)
			ref.current?.focus()
		}
	}, [autoFocus])

	const onBlurHandler = () => {
		setFocused(false)
	}

	const onFocusHandler = () => {
		setFocused(true)
	}

	const onSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCaretPosition(event?.target?.selectionStart || 0)
	}

	function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		onChange?.(e.target.value)
		setCaretPosition(e.target.value.length)
	}

	return (
		<div className={classNames(cls.inputWrapper, {}, [className])}>
			{placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
			<div className={cls.caretWrapper}>
				<input
					ref={ref}
					className={cls.input}
					type={type}
					value={value}
					onFocus={onFocusHandler}
					onBlur={onBlurHandler}
					onChange={onChangeHandler}
					onSelect={onSelectHandler}
					{...rest}
				/>
				{focused && <span style={{left: `${caretPosition * 7}px`}} className={cls.caret}></span>}
			</div>

		</div>
	)
})