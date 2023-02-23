// Récupérer les éléments HTML nécessaires
const leftOperand = document.getElementById('left-operand');
const rightOperand = document.getElementById('right-operand');
const operator = document.getElementById('operator');
const result = document.getElementById('result');

// Fonction pour calculer le résultat
function calculateResult() {
  let leftValue = parseFloat(leftOperand.value);
  let rightValue = parseFloat(rightOperand.value);
  let operatorValue = operator.value; // Récupérer la valeur de l'opérateur sélectionné

  let calculatedResult;

  // Effectuer le calcul approprié en fonction de l'opérateur sélectionné
  switch(operatorValue) {
    case '+':
      calculatedResult = leftValue + rightValue;
      break;
    case '-':
      calculatedResult = leftValue - rightValue;
      break;
    case '*':
      calculatedResult = leftValue * rightValue;
      break;
    case '/':
      calculatedResult = leftValue / rightValue;
      break;
    default:
      calculatedResult = 'Erreur';
  }
  
  // Mettre à jour l'affichage du résultat
  result.innerText = calculatedResult;
}

// Ajouter un écouteur d'événements pour l'élément select d'opérateurs
operator.addEventListener('change', calculateResult);

// Ajouter des écouteurs d'événements pour les champs de saisie
leftOperand.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calculateResult();
  }
});

rightOperand.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calculateResult();
  }
});