import Expense from './components/expense.js'
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense title={expenses[0].title}
      price={expenses[0].amount}
      date={expenses[0].date}></Expense>
      <Expense title={expenses[1].title}
      price={expenses[1].amount}
      date={expenses[1].date}></Expense>
      <Expense title={expenses[2].title}
      price={expenses[2].amount}
      date={expenses[2].date}></Expense>
    </div>
  );
}

export default App;
