import Image from "next/image";
import Attribution from '@/components/Attribution';
import Supervisor from 'public/images/icon-supervisor.svg';
import TeamBuilder from 'public/images/icon-team-builder.svg';
import Karma from 'public/images/icon-karma.svg';
import Calculator from 'public/images/icon-calculator.svg';

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center px-8 py-16 lg:p-20 bg-veryLightGray text-grayishBlue">
      <div className="flex flex-col items-center gap-6 lg:w-11/12 w-full ">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-grayishBlue font-light text-center">Reliable, efficient delivery</h1>
          <h1 className="text-2xl font-bold text-veryDarkBlue mb-5 text-center">Powered by Technology</h1>
          <p className="text-grayishBlue lg:w-8/12 text-center">
            Our Artificial Intelligence powered tools use millions of project data points
            to ensure that your project is successful
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-6 items-center justify-center">
          <div className="w-full lg:basis-1/3 flex flex-col border-t-4 p-4 rounded border-customCyan shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] h-fit">
          <div className="flex flex-col">
          <h2 className="text-xl lg:text-lg font-bold text-veryDarkBlue mb-2">Supervisor</h2>
            <p className="text-grayishBlue mb-4">
              Monitors activity to identify project roadblocks
            </p>
          </div>
            <Image className='ml-auto' src={ Supervisor } alt="" />
          </div>
          <div className="w-full lg:basis-1/3 flex flex-col gap-6">
            <div className="flex flex-col border-t-4 p-4 rounded border-customRed shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] h-fit">
              <h2 className="text-xl lg:text-lg font-bold text-veryDarkBlue mb-2">Team Builder</h2>
              <p className="text-grayishBlue mb-4">Scans our talent network to create the optimal team for your project
              </p>
              <Image className='ml-auto' src={ TeamBuilder } alt="" />
            </div>
            <div className="flex flex-col border-t-4 p-4 rounded border-customOrange shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] h-fit">
              <h2 className="text-xl lg:text-lg font-bold text-veryDarkBlue mb-2">Karma</h2>
              <p className="text-grayishBlue mb-4">
                Regularly evaluates our talent to ensure quality
              </p>
              <Image className='ml-auto' src={ Karma } alt="" />
            </div>
          </div>
          <div className="w-full lg:basis-1/3 flex flex-col border-t-4 p-4 rounded border-customBlue shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] h-fit">
            <h2 className="text-xl lg:text-lg font-bold text-veryDarkBlue mb-2">Calculator</h2>
            <p className="text-grayishBlue mb-4">
              Uses data from past projects to provide better delivery estimates
            </p>
            <Image className='ml-auto' src={ Calculator } alt="" />
          </div>
        </div>
      </div>
      <Attribution></Attribution>
    </main>
  );
}
