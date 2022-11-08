var quizQuestions = [
	{
		id: "WANT_FROM_MONEY",
		question: "Что я хочу от своих денег?",

		answers: [
			{
				type: "DONT_LOSS",
				content: "Не потерять",
				answer: false,
				weight: 1
			},
			{
				type: "REGULAR_INCOME",
				content: "Регулярный доход",
				answer: false,
				weight: 2
			},
			{
				type: "GROWTH_NOT_INCOME",
				content: "Рост без дохода",
				answer: false,
				weight: 3
			},
			{
				type: "DONT_REDUCE",
				content: "Не уменьшить",
				answer: false,
				weight: 1
			}
		]
	},


	{
		id: "INVESTMENT_TERM",
		question: "На какой срок вы готовы инвестировать?",
		answers: [
			{
				type: "SMALLER",
				content: "до 2 лет",
				answer: false,
				weight: 3
			},
			{
				type: "SMALL",
				content: "2-5 лет",
				answer: false,
				weight: 3
			},
			{
				type: "MEDIUM",
				content: "от 5 лет",
				answer: false,
				weight: 2
			},
			{
				type: "LARGE",
				content: "от 10 лет",
				answer: false,
				weight: 1
			}
		]
	},
	{
		id: "SATISFY_PROFIT",
		question: "Меня устраивает доходность",
		answers: [
			{
				type: "SMALL",
				content: "5-7%",
				answer: false,
				weight: 1
			},
			{
				type: "MEDIUM",
				content: "10-15%",
				answer: false,
				weight: 2
			},
			{
				type: "LARGE",
				content: "20-30%",
				answer: false,
				weight: 3
			},
			{
				type: "LARGEST",
				content: "более 30%",
				answer: false,
				weight: 3
			}
		]
	}
];

export default quizQuestions;