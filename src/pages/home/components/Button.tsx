import { NavLink } from 'react-router-dom'

interface Props {
  label: string
  onClick?: () => void
  type: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  disabled?: boolean
  className?: string
  to?: string
  icon?: JSX.Element
  ariaLabel: string
}

const Button = ({
  label,
  onClick,
  type,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  className = '',
  to,
  ariaLabel,
}: Props) => {
  const baseClasses = 'rounded transition-colors duration-200 font-bold'

  const variantClasses: { [key in 'primary' | 'secondary']: string } = {
    primary: 'bg-primary-blue text-typography-white hover:scale-105',
    secondary:
      'border border-neutral-default text-typography-grey bg-neutral-white hover:scale-105',
  }

  const sizeClasses: { [key in 'small' | 'medium' | 'large']: string } = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  }

  const fullWidthClass = fullWidth ? 'w-full' : ''

  const letterSpacingClass = 'tracking-wide'

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidthClass} ${letterSpacingClass} ${className}`

  if (to) {
    return (
      <NavLink to={to} className={combinedClasses}>
        {label}
      </NavLink>
    )
  }

  return (
    <button
      role="button"
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={combinedClasses}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
