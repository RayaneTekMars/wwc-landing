'use client'
import { forwardRef } from 'react'

interface ButtonProps {
  content: string
  onClick?: () => void
  className?: string
}

const CustomButton = forwardRef<HTMLDivElement, ButtonProps>(function CustomButton({ content, onClick = () => {}, className }: ButtonProps, ref) {
  return (
    <div className={className} ref={ref} onClick={onClick} role='button'>
      <span>{content}</span>
    </div>
  )
})

CustomButton.displayName = 'CustomButton'

export {
  CustomButton
}
