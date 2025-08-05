import { CloudRainIcon, LucideBadgeInfo, LucideCalendar, LucideSparkles, LucideSunrise, LucideSunset, LucideTerminal, Rainbow, SunDimIcon, SunSnowIcon } from "lucide-react";
import WeatherIcon from "./WeatherIcon";
import { FahrenheitToCelsius } from "../../lib/FahrenheitToCelsius";

export const WeatherCard = ({data}) => {
    // console.log(data);

    return (
        <div className='w-[270px] sm:w-[300px] h-[300px] bg-white rounded flex flex-col justify-between'>
            <div className="flex justify-between items-center p-2">
                <div><h2 className="text-2xl">{ FahrenheitToCelsius(data.temp)} Cº</h2></div>
                <div className="flex gap-1 font-bold text-red-400"><LucideCalendar className="w-5 h-5 font-bold"/><h3>{data.datetime}</h3></div>
            </div>

            <div className="flex justify-center">
                <WeatherIcon style={'w-30 h-30'} icon={data.icon} />
            </div>

            <div className="flex flex-col gap-1 items-start p-3">
                <p className="flex gap-1 items-center"><LucideBadgeInfo className="w-5 h-5"/> {data.conditions}</p>
                <p className="flex gap-1 items-center"><LucideSunrise className="w-5 h-5 text-orange-600"/> Sunrise: {data.sunrise}</p>
                <p className="flex gap-1 items-center"><LucideSunset className="w-5 h-5 text-orange-600"/> Sunset: {data.sunset}</p>
            </div>

        </div>
    );
};

