// Récupérer les éléments HTML nécessaires
const leftOperand = document.getElementById('left-operand');
const rightOperand = document.getElementById('right-operand');
const result = document.getElementById('result');

// Fonction pour calculer le résultat
function calculateResult() {
  let leftValue = parseFloat(leftOperand.value); // Convertir la valeur en nombre à virgule flottante
  let rightValue = parseFloat(rightOperand.value);
  
  let calculatedResult = leftValue + rightValue;
  
  // Mettre à jour l'affichage du résultat
  result.innerText = calculatedResult;
}

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