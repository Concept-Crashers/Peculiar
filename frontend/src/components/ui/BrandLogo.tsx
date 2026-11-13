import peculiarLogo from '../../assets/peculiar-logo.png'

interface BrandLogoProps {
  className?: string
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      className={className ? `brand-logo ${className}` : 'brand-logo'}
      src={peculiarLogo}
      alt=""
      width="675"
      height="199"
    />
  )
}
