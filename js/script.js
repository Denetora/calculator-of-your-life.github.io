jQuery("document").ready(function(){
	var month1, 
		month2, 
		day1, 
		day2, 
		year1, 
		year2, 
		razn_year,  
		sum_year, 
		kol_day;
	
	var hour_work, 
		kol_money_ndfl, 
		vse_otpuska_hour, 
		vse_otpuska, 
		hour_work_21, 
		kol_money_hour_life, 
		kol_money_hour, 
		kol_money_month, 
		kol_money_hour, 
		year_work,
		vis_days,
		kol_day_work, 
		kol_hour_work, 
		kol_freedom_day, 
		kol_freedom_hour, 
		kol_sleep_sum, 
		sleep_hour,
		kol_money_all,
		kol_freedom_day_and_otpuska,
		grego_days = 0;
			
	
	function gregoDays(year1, year2){
			var vis_year = 0;
			
			for (var i = jQuery("#year1").val();
				 i <= jQuery("#year2").val();
				 i++) 
				{
				if((i%4 == 0 && i%100 != 0) || (i%400 == 0)){
					vis_year += 1;
				}	
			}
			return vis_year;		
		}


	jQuery("input").on('keyup', function(){
	
		month1 = document.getElementById("month1").selectedIndex;
		month2 = document.getElementById("month2").selectedIndex;
		
		day1 = jQuery("#day1").val();
		day2 = jQuery("#day2").val();
		
		year1 = jQuery("#year1").val();
		year2 = jQuery("#year2").val();
		
		day1 = parseInt(day1);
		day2 = parseInt(day2);
		
		year1 = parseInt(year1);
		year2 = parseInt(year2);


		if (month1 == 0) {
			month1 = 0;
		} 	else if (month1 == 1){
			month1 = 31;
		}	else if (month1 == 2){
			month1 = 59;
		}	else if (month1 == 3){
			month1 = 90;
		}	else if (month1 == 4){
			month1 = 120;
		}	else if (month1 == 5){
			month1 = 151;
		}	else if (month1 == 6){
			month1 = 181;
		}	else if (month1 == 7){
			month1 = 212;
		}	else if (month1 == 8){
			month1 = 243;
		}	else if (month1 == 9){
			month1 = 273;
		}	else if (month1 == 10){
			month1 = 304;
		}	else if (month1 == 11){
			month1 = 334;
		}	
		
		
		if (month2 == 0) {
			month2 = 0;
		} 	else if (month2 == 1){
			month2 = 31;
		}	else if (month2 == 2){
			month2 = 59;
		}	else if (month2 == 3){
			month2 = 90;
		}	else if (month2 == 4){
			month2 = 120;
		}	else if (month2 == 5){
			month2 = 151;
		}	else if (month2 == 6){
			month2 = 181;
		}	else if (month2 == 7){
			month2 = 212;
		}	else if (month2 == 8){
			month2 = 243;
		}	else if (month2 == 9){
			month2 = 273;
		}	else if (month2 == 10){
			month2 = 304;
		}	else if (month2 == 11){
			month2 = 334;
		}	
		
		razn_year = year2 - year1;
		
		sum_year = 365 * razn_year;
		
		grego_days = gregoDays(razn_year);

		vis_days = grego_days;
	
		kol_day = sum_year - month1 - day1;
		kol_day = kol_day + month2 + day2;
		kol_day = kol_day + vis_days;

		hour_work = jQuery("#hour_work").val();
		year_work = jQuery("#year_work").val();
		sleep_hour = jQuery("#sleep_hour").val();
		kol_money_month = jQuery("#kol_money_month").val();
		
		
		hour_work = parseInt( hour_work );
		year_work = parseInt( year_work );
		sleep_hour = parseInt( sleep_hour );
		kol_money_month = parseInt( kol_money_month );
		
		kol_money_all = kol_money_month * year_work * 12;
		
		kol_money_ndfl = Math.round(kol_money_all * 0.13);
		
		kol_sleep_sum = sleep_hour * kol_day;
		
		hour_work_21 = hour_work * 21;
		
		kol_money_hour = Math.round( kol_money_month / hour_work_21 );
		
		kol_money_hour_life = Math.round(kol_money_month / 720);
		
		kol_day_work = year_work * 219;
		
		kol_hour_work = kol_day_work * hour_work;
		
		vse_otpuska = 28 * year_work;
		
		vse_otpuska_hour = vse_otpuska * ( 24 - sleep_hour);
		
		kol_freedom_day = 146 * year_work;
		
		kol_freedom_day_and_otpuska = kol_freedom_day + vse_otpuska;
		
		kol_freedom_hour = 24 - sleep_hour - hour_work;
		
		kol_freedom_hour = kol_freedom_hour * kol_freedom_day;
		
		kol_freedom_hour = kol_freedom_hour + vse_otpuska_hour;
		
		
	jQuery("#result1").html( kol_day );
	jQuery("#result2").html( kol_sleep_sum );
	jQuery("#result3").html( kol_money_all );
	jQuery("#result4").html( kol_money_ndfl );
	jQuery("#result5").html( kol_money_hour );
	jQuery("#result6").html( kol_money_hour_life );	
	jQuery("#result7").html( kol_day_work );
	jQuery("#result8").html( kol_hour_work );
	jQuery("#result9").html( kol_freedom_day_and_otpuska );
	jQuery("#result10").html( kol_freedom_hour );
	

	tabLeft.addEventListener('click', () => {
			

			tabLeft.classList.add('active');
			tabRight.classList.remove('active');
		});

		tabRight.addEventListener('click', () => {
			

			tabRight.classList.add('active');
			tabLeft.classList.remove('active');
		});
	});
	
	
	 
	jQuery(".message").click(function()
	{
	jQuery('#message-box').fadeIn(300);
	 var iddiv = jQuery(this).attr("iddiv");
	 jQuery('#'+iddiv).fadeIn(300);
	 jQuery('#message-box').attr('opendiv',iddiv);
	 return false;
	});
	 
	jQuery('#message-box, .answer').click(function()
	{
	 var iddiv = jQuery("#message-box").attr('opendiv');
	 jQuery('#message-box').fadeOut(300);
	 jQuery('#'+iddiv).fadeOut(300);
	});
 
	

	
});	
