
import Courselist from'../../components/courselist'
import TimeTable from '../../components/timetable'
const Page = () => {
  return <div className=" gap-4 bg-slate-50 ">
            <div className=''>navbar</div>

                <div className="grid grid-cols-2 gap-2 auto-rows-min">
                    <div className=" place-self-center ">
                        <TimeTable></TimeTable>
                    </div>
                    <div className="col-span-1 ">
                        <div className="flex flex-col  border-4">
                            <div className='container box-border w-full  h-64'>01</div>
                            <div><Courselist></Courselist></div>
                            <div>03</div>
                        </div>
                    
                    </div>
                </div>
            
         
        </div>;
};
export default Page;