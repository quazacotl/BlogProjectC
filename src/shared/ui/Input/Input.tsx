import {InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react'
import cls from './Input.module.scss'
import {classNames, Mods} from '@/shared/lib/classNames/classNames'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
    className?: string,
	value?: string | number,
	readonly?: boolean,
	onChange?: (value: string) => void
}


export const Input = memo((props: InputProps) => {
	Input.displayName = 'Input'
	const {className, onChange, value, type = 'text', placeholder,  autoFocus, readonly,  ...rest} = props

	const [focused, setFocused] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)
	const ref = useRef<HTMLInputElement>(null)

	const isCaretVisible = focused && !readonly


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

	const mods: Mods = {
		[cls.readonly]: readonly
	}

	return (
		<div className={classNames(cls.inputWrapper, mods, [className])}>
			{placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
			<div className={cls.caretWrapper}>
				<input
					readOnly={readonly}
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
				{isCaretVisible && <span style={{left: `${caretPosition * 7}px`}} className={cls.caret}></span>}
			</div>

		</div>
	)
})