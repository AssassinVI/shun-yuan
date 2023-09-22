
//-- 月利率 = 年利率/12/100
var month_apr = Number(input_mv.pr.text) / 12 / 100;

var month_num;

//-- 月數 --
//-- 寬限年>0 --
if (Number(input_mv.period_year.text) > 0) {
    //-- 月數= (貸款年限*12)-(寬限年*12) --
    month_num = (Number(input_mv.allyear.text) * 12) - (Number(input_mv.period_year.text) * 12);
}
else {
    //-- 月數= 貸款年限*12 --
    month_num = Number(input_mv.allyear.text) * 12;
}

//-- 每月應付本息金額之平均攤還率= (((1+月利率)^月數)*月利率)/(((1+月利率)^月數)-1) --
var avg_for_money = ((Math.pow((1 + month_apr), month_num)) * month_apr) / ((Math.pow(1 + month_apr, month_num)) - 1);


//-- 自備金額 --
var m_money;
//-- 貸款金額 --
var money;
//-- 總價 --
var all_money = Number(input_mv.allmoney.text);

// -- 貸款金額=總價*10000*0.7 -- 
money = all_money * 10000 * 0.7;
//-- 自備金額=總價 * 0.3  (無條件進位)--
m_money = Math.ceil(all_money * 0.3);
//-- 自備 --
output_mv.my_money.text = nf.formatNumber(m_money);
//-- 貸金 (無條件捨去) --
output_mv.loan_money.text = nf.formatNumber(Math.floor(all_money * 0.7));

//---------------- 拆款 ----------------

//-- 簽約金 (四捨五入) --
output_mv.s_fee.text = Math.round(all_money * 0.12 - 20);
//-- 工程期款 (四捨五入) --
output_mv.project_pay.text = Math.round(all_money * 0.07);
//-- 結構體款 (四捨五入) --
output_mv.structure_pay.text = Math.round(all_money * 0.03);
//-- 使照取得 (四捨五入) --
output_mv.license_pay.text = Math.round(all_money * 0.03);
//-- 交屋款 (四捨五入) --
output_mv.house_pay.text = Math.round(all_money * 0.05);

//---------------- 拆款 END ----------------

output_mv.period_year.text = input_mv.period_year.text;
output_mv.period_year2.text = input_mv.period_year.text;
//output_mv.year_num.text=input_mv.allyear.text;



var avg_pay_money, total_money, interest, period_money;

//-- 寬限年>0 --
if (Number(input_mv.period_year.text) > 0) {

    output_mv.money2.visible = false;
    output_mv.money1.visible = true;

    //-- 寬限期(金額) = 貸款金額*月利率*(寬限年*12) --
    period_money = money * month_apr * (Number(input_mv.period_year.text) * 12);

    //-- 平均本息攤還 = 貸款金額*每月應付本息金額之平均攤還率 (無條件捨去) --
    avg_pay_money = Math.floor(money * avg_for_money);

    //-- 本息合計 = 平均本息攤還*月數+寬限期(金額) --
    total_money = avg_pay_money * month_num + period_money;

    //-- 利息 = 本息合計-貸款金額 --
    interest = total_money - money;

}
//-- 寬限年=0 --
else {

    output_mv.money2.visible = true;
    output_mv.money1.visible = false;

    //-- 寬限期(金額) --
    period_money = 0;

    //-- 平均本息攤還 = 貸款金額*每月應付本息金額之平均攤還率 (無條件捨去) --
    avg_pay_money = Math.floor(money * avg_for_money);

    //-- 本息合計 = 平均本息攤還*月數 --
    total_money = avg_pay_money * month_num;

    //-- 利息 = 本息合計-貸款金額 --
    interest = total_money - money;
}


//-- 數字千位數 -- 
//-- 寬限期後 = 平均本息攤還(寬限年>0 算出來的結果) --
output_mv.money1.avg_money.text = nf.formatNumber(avg_pay_money);
//-- 本金攤還 = 平均本息攤還(寬限年=0 算出來的結果) --
output_mv.money2.avg_money2.text = nf.formatNumber(avg_pay_money);

//-- 寬限年>0 --
if (Number(input_mv.period_year.text) > 0) {
    //-- 寬限期 = 貸款金額*月利率 (無條件捨去) --
    output_mv.money1.avg_period_money.text = nf.formatNumber(Math.floor(money * month_apr));
}
//-- 寬限年=0 --
else {

    output_mv.money1.avg_period_money.text = 0;
}
