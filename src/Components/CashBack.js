import React from 'react';

const CashBack = () => {
    return (
        <div className='flex justify-center'>
            <div style={{ backgroundColor: '#FFFFFF' }} className="hero shadow-xl rounded-[15px] mt-5 w-10/12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://as1.ftcdn.net/v2/jpg/03/13/35/54/1000_F_313355403_S1kuP4wQ2BKR8dpiaNAM0BGi5MDyIytb.jpg" className="max-w-sm rounded-lg" />

                    <div>
                        <h1 className="text-5xl font-bold">GET <span className='text-yellow-400 text-7xl'>3%</span> </h1>
                        <h1 className="text-5xl font-bold">Cashback</h1>
                        <p className="py-6">On Your First Recharge</p>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CashBack;