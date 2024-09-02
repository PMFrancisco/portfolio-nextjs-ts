import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

type JobItemProps = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const JobItem: React.FC<JobItemProps> = ({ role, company, period, description }) => {
  return (
    <li className="mb-4">
      <Heading level={3}>{role}</Heading>
      <Paragraph className="italic">{company} - {period}</Paragraph>
      <Paragraph>{description}</Paragraph>
    </li>
  );
};
