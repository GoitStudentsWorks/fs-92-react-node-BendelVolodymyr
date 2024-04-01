import { format, addMonths, isBefore, isAfter } from 'date-fns';
import { Paginator } from './DatePaginator.styled';

const DatePaginator = ({ selectedDate, setSelectedDate }) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const isPrevDisabled = isBefore(selectedDate, addMonths(new Date(), -12));
  const isNextDisabled = isAfter(
    selectedDate,
    new Date(currentYear, currentMonth, 1)
  );

  const monthName = format(selectedDate, 'MMMM');
  const year = selectedDate.getFullYear();

  const handlePrevClick = () => {
    setSelectedDate(addMonths(selectedDate, -1));
  };

  const handleNextClick = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };

  return (
    <Paginator>
      <button onClick={handlePrevClick} disabled={isPrevDisabled}>
        {'<'}
      </button>
      <span>{`${monthName}, ${year}`}</span>
      <button onClick={handleNextClick} disabled={isNextDisabled}>
        {'>'}
      </button>
    </Paginator>
  );
};

export default DatePaginator;