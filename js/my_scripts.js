function moneyHandler(b){
	var a=document.forms["m"].elements["number"].value;
	b=parseInt(a);
	return b;
}
function espressoCofe(){
	var b=moneyHandler(b);
	var d=document.getElementById('display');
	
		if (b==0 )
		{
			d.innerHTML="Внесите, пожалуйста, деньги";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},6000);
		}
		else if (b > 20)
		{
			d.innerHTML="Заберите, пожалуйста, сдачу";
			setTimeout(function() { d.innerHTML = "Ваш кофе готов.<br>Спасибо за Ваш выбор!";}, 4000);
			document.forms["m"].elements["number"].value = "0";
			document.forms["spoon"].elements["choise"].options[0].selected = "selected";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
		}
		else if (b<20)
		{
			d.innerHTML="Стоимость кофе 20 грн.";
			document.forms["m"].elements["number"].value = "0";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
		}
		else {
			d.innerHTML="Ваш кофе будет готов через несколько секунд...";
			setTimeout(function() { d.innerHTML = "Ваш кофе готов.<br>Спасибо за Ваш выбор!";}, 4000);
			document.forms["m"].elements["number"].value = "0";
			document.forms["spoon"].elements["choise"].options[0].selected = "selected";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
			
		}
	}

function americanoCofe(){
	var b=moneyHandler(b);
	var d=document.getElementById('display');
	
		if (b==0 )
		{
			d.innerHTML="Внесите, пожалуйста, деньги";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},4000);
		}
		else if (b > 20)
		{
			d.innerHTML="Заберите, пожалуйста, сдачу";
			setTimeout(function() { d.innerHTML = "Ваш кофе готов.<br>Спасибо за Ваш выбор!";}, 4000);
			document.forms["m"].elements["number"].value = "0";
			document.forms["spoon"].elements["choise"].options[0].selected = "selected";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
		}
		else if (b<20)
		{
			d.innerHTML="Стоимость кофе 20 грн.";
			document.forms["m"].elements["number"].value = "0";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
		}
		else {
			d.innerHTML="Ваш кофе будет готов через несколько секунд...";
			setTimeout(function() { d.innerHTML = "Ваш кофе готов.<br>Спасибо за Ваш выбор!";}, 4000);
			document.forms["m"].elements["number"].value = "0";
			document.forms["spoon"].elements["choise"].options[0].selected = "selected";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
			
		}
	}	
function withMilkCofe(){
	var b=moneyHandler(b);
	var d=document.getElementById('display');
	
		if (b==0 )
		{
			d.innerHTML="Внесите, пожалуйста, деньги";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},6000);
		}
		else if (b > 20)
		{
			d.innerHTML="Заберите, пожалуйста, сдачу";
			setTimeout(function() { d.innerHTML = "Ваш кофе готов.<br>Спасибо за Ваш выбор!";}, 4000);
			document.forms["m"].elements["number"].value = "0";
			document.forms["spoon"].elements["choise"].options[0].selected = "selected";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
		}
		else if (b<20)
		{
			d.innerHTML="Стоимость кофе 20 грн.";
			document.forms["m"].elements["number"].value = "0";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
		}
		else {
			d.innerHTML="Ваш кофе будет готов через несколько секунд...";
			setTimeout(function() { d.innerHTML = "Ваш кофе готов.<br>Спасибо за Ваш выбор!";}, 4000);
			document.forms["m"].elements["number"].value = "0";
			document.forms["spoon"].elements["choise"].options[0].selected = "selected";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
			
		}
	}
function capuchinoCofe(){
	var b=moneyHandler(b);
	var d=document.getElementById('display');
	
		if (b==0 )
		{
			d.innerHTML="Внесите, пожалуйста, деньги";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},6000);
		}
		else if (b > 25)
		{
			d.innerHTML="Заберите, пожалуйста, сдачу";
			setTimeout(function() { d.innerHTML = "Ваш кофе готов.<br>Спасибо за Ваш выбор!";}, 4000);
			document.forms["m"].elements["number"].value = "0";
			document.forms["spoon"].elements["choise"].options[0].selected = "selected";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
		}
		else if (b<25)
		{
			d.innerHTML="Стоимость кофе 25 грн.";
			document.forms["m"].elements["number"].value = "0";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
		}
		else {
			d.innerHTML="Ваш кофе будет готов через несколько секунд...";
			setTimeout(function() { d.innerHTML = "Ваш кофе готов.<br>Спасибо за Ваш выбор!";}, 4000);
			document.forms["m"].elements["number"].value = "0";
			document.forms["spoon"].elements["choise"].options[0].selected = "selected";
			setTimeout(function(){ d.innerHTML="Выберите, пожалуйста, кофейный напиток и внесите деньги";},8000);
			
		}
	}



