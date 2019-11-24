const self = module.exports = {
    getMyTax:(data) => {
        return new Promise( async resolve=>{
            const getGrossIncome = Math.round((data['annual-salary'])/12);
            const getIncomeTax = await self.getIncomeTax(data['annual-salary']);
            resolve({
                name: data['first-name'] + ' ' + data['last-name'],
                'pay-period':data['payment-start-date'],
                'gross-income':getGrossIncome,
                'income-tax':getIncomeTax,
                'net-income': (getIncomeTax != 'Nil')? getGrossIncome - getIncomeTax:getGrossIncome,
                'super-amount':getGrossIncome * data['super-rate']
            });
        })
    },

    getIncomeTax:(annualSalary)=>{
        return new Promise(resolve=>{
            if(annualSalary > 0 && annualSalary <= 18200){
                resolve( 'Nil' );
            }else if(annualSalary >= 18201 && annualSalary <= 37000){
                resolve( Math.round((0 + (0.19 * (annualSalary - 18200)))/12) );
            }else if(annualSalary >= 37001 && annualSalary <= 87000){
                resolve( Math.round((3572 + (0.325 * (annualSalary - 37000)))/12) );
            }else if(annualSalary >= 87001 && annualSalary <= 180000){
                resolve( Math.round((19822 + (0.37 * (annualSalary - 87000)))/12) );
            }else if(annualSalary >= 180001){
                resolve( Math.round((54232 + (0.45 * (annualSalary - 180000)))/12) );
            }
            
        })
    },


}