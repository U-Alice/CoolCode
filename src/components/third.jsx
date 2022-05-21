import {Link} from 'react-router-dom';

function Third(){
    return(
        <div>
            <div className="font-semibold text-xl font-arima font-bold text-gray-600 text-center mt-12 drop-shadow-md outline-double outline-blue-300 rounded-md dark:text-slate-100">
            <h3>Reliable, efficient delivery</h3>
            <h1>Powered by <span className="text-blue-600 dark:text-slate-100">Technology</span></h1>
            <p>Free open source challenges and solutions with javascript</p>
            </div>
            
            <div className="flex gap-4 ml-8 md:ml-16 mx-4 mt-12">
                <div className="md:w-1/3 md:h-40 rounded-sm mt-24 bg-white drop-shadow border-solid border-t-8 border-purple-300 flex justify-center align-center p-4 animate-switch-right dark:bg-gray-300 dark:text-slate-900">
                    <div>
                        <Link to='/calc'>
                    <h3 className="font-arima font-extrabold text-xl">BASIC CALCULATOR</h3> 
                    </Link>
                    <p className="font-arima font-bold">Basic calculations calculator in javascript, css and html</p>
                    <img src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/2x/external-calculator-stationery-items-sbts2018-outline-color-sbts2018.png" alt="calc" className="w-16 h-12 ml-20"/>
                    </div>
                </div>
                <div className=" md:w-1/3 h-64">
                <div className="w-full h-40 rounded-sm bg-white border-solid drop-shadow border-t-8 border-red-300 flex justify-center align-center p-4 animate-switch-bottom dark:bg-gray-300 dark:text-slate-900">
                <div>
                    <Link to='/blackJack'>
                    <h3 className="font-arima font-extrabold text-xl">BlackJack game</h3> 
                    </Link>
                    <p className="font-arima font-bold">Fun javascript game</p>
                    <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/2x/external-game-game-development-xnimrodx-lineal-gradient-xnimrodx-2.png" alt="calc" className="w-16 h-12 ml-8"/>
                    </div>
                </div>
                <Link to='/guess'>
                <div className="w-full md:h-40 mt-12 rounded-sm bg-white p-6 drop-shadow border-solid border-t-8   border-green-300 animate-switch-top dark:bg-gray-300 dark:text-slate-900">
                <h3 className="font-arima font-extrabold text-xl">Guessing game</h3>
                <p>Guess a number to see if it matches with the generated one.</p>
                <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/2x/external-thinking-engineering-kiranshastry-lineal-color-kiranshastry.png" alt="calc" className="w-16 h-12 ml-20"/>

                </div>
                </Link>
                </div>
                
                <div className="md:w-1/3 md:h-40 h-64 rounded-sm bg-white mt-24 drop-shadow  border-solid border-t-8 border-blue-300 p-4 animate-switch-left dark:bg-gray-300 dark:text-slate-900">
                <h3 className="font-arima font-extrabold text-xl">Favorite Images collection</h3>
                <p>Interacting with the DOM and handling events</p>
                <img src="https://img.icons8.com/ultraviolet/2x/like.png" alt="calc" className="w-12 h-12 ml-24"/>
                </div>
            </div>
        </div>
    )
}

export default Third;