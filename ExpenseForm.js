import { useState, useCallback } from 'react';

function ExpenseForm(props) {
const [title, setTitle] = useState('');
const [amount, setAmount] = useState('');

const handleTitleChange = (event) => {
setTitle(event.target.value);
};

const handleAmountChange = (event) => {
setAmount(event.target.value);
};

const handleSubmit = useCallback((event) => {
event.preventDefault();
const expense = {
title: title,
amount: +amount,
};
props.onAddExpense(expense);
setTitle('');
setAmount('');
}, [title, amount, props.onAddExpense]);

return (
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="title">Title</label>
<input type=""></input>
);