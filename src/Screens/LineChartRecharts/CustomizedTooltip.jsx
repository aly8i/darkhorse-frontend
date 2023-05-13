import { format } from 'date-fns';

const CustomizedTooltip = (props) => {
  const { label, payload, active } = props;
  
  if (!active || !label || !payload || payload.length === 0) return null;
  return (
    <p style={{ border: 'none', color: 'red' }}>{`${format(new Date(payload[0].payload.datetime), 'dd MMM, yyyy')}`}</p>
  );
}

export default CustomizedTooltip