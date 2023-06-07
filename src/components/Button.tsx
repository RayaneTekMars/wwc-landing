'use client'
import { forwardRef } from 'react'

interface ButtonProps {
  content: string
  onClick?: () => void
  className?: string
}

const CustomButton = forwardRef<HTMLDivElement, ButtonProps>(({ content, onClick = () => {}, className }: ButtonProps, ref) => (
  <div className={className} ref={ref} onClick={onClick} role='button'>
    <span>{content}</span>
  </div>
))

export {
    CustomButton
}
