import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { companyContact } from '../../data/companyInformation'

interface CompanyContactDetailsProps {
  compact?: boolean
}

export function CompanyContactDetails({ compact = false }: CompanyContactDetailsProps) {
  return (
    <div className={`company-contact-details${compact ? ' company-contact-details--compact' : ''}`}>
      <a href={`mailto:${companyContact.email}`}>
        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
        <span>{companyContact.email}</span>
      </a>
      {companyContact.phones.map((phone) => (
        <a key={phone} href={`tel:${phone.replaceAll(' ', '')}`}>
          <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
          <span>{phone}</span>
        </a>
      ))}
    </div>
  )
}
