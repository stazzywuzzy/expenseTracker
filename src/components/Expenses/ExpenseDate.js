import '../../asset/css/ExpenseDate.css'

const ExpenseDate = (props) => {

    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date-month">{month}</div>
            <div className="expense-date-year">{year}</div>
            <div className="expense-date-day">{day}</div>
        </div>
    );
}

export default ExpenseDate;