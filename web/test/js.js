function calcMortgage (principal, rate, years) {
	let r = rate / 1200;
	let n = years * 12;
	return principal * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));
  }

  function updateMonthly () {
	let years = document.getElementById('years').value;
	let principal = document.getElementById('principal').value;
	let MM = calcMortgage(principal, document.getElementById('ratePA').value, years);
	document.getElementById('monthly').innerHTML = Math.round(MM);
	document.getElementById('allTime').innerHTML = Math.round(MM * 12 * years);
	document.getElementById('overPayment').innerHTML = Math.round(MM * 12 * years - principal);
  }

  function updatePrincipal (val) {
	let newValue = Math.round(100 - document.getElementById('principal').value / 
							document.getElementById('propertyCost').value * 100);
	newValue = Math.min(100, Math.max(5, newValue));
	document.getElementById('ownResources').value = newValue;
	updateSlider(newValue)
  }

  function updateSlider (val) {
	let principal = Math.round(document.getElementById('propertyCost').value * (100-val) / 100);
	let own = Math.round(document.getElementById('propertyCost').value * val / 100);
	document.getElementById('ownResourcesValue').innerHTML = val + '%, ' + own;
	document.getElementById('principal').value = principal;
	updateMonthly();
  }