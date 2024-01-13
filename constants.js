export const contractAddress = "0x47a4c5FF75b4C5e6AF7989Ed707A09B9a33B8bEF"
export const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "professorNumber",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "addReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "professorNumber",
				"type": "uint8"
			}
		],
		"name": "getReviewsForProfessor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "message",
						"type": "string"
					}
				],
				"internalType": "struct ReviewSystem.Review[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
