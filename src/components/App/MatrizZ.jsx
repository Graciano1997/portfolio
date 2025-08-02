export const MatrizZ = ({iconComponent, constants={a1:'a1',a2:'a2',a3:'a3',b1:'b1',b2:'b2',b3:'b3',d1:'d1',d2:'d2',d3:'d3'}}) => {
    return (
        <div className="flex text-white mt-5 items-center gap-2">
            
                {iconComponent}=
            <div className="grid grid-cols-2 grid-rows-1 p-1" style={{ borderLeft: '2px solid white', borderRight: '2px solid white' }}>
            
            <div style={{borderRight:'2px dashed white'}} className="grid grid-cols-3 grid-rows-3 pr-2 ">
                <div className="p-2">{constants.a1}</div>
                <div className="p-2">{constants.b1}</div>
                <div className="p-2">{constants.d1}</div>
                
                <div className="p-2">{constants.a2}</div>
                <div className="p-2">{constants.b2}</div>
                <div className="p-2">{constants.d2}</div>
                
                <div className="p-2">{constants.a3}</div>
                <div className="p-2">{constants.b3}</div>
                <div className="p-2">{constants.d3}</div>

                </div>
                <div className="grid grid-cols-2 grid-rows-3">
                <div className="p-2">{constants.a1}</div>
                <div className="p-2">{constants.b1}</div>

                <div className="p-2">{constants.a2}</div>
                <div className="p-2">{constants.b2}</div>
                
                <div className="p-2">{constants.a3}</div>
                <div className="p-2">{constants.b3}</div>
                </div>
            </div>
            = {`{
                  [ (${constants.a1}.${constants.b2}.${constants.d3}) + 
                    (${constants.b1}.${constants.d2}.${constants.a3}) +
                    (${constants.d1}.${constants.a2}.${constants.b3})
                  ] -
                  [ (${constants.a3}.${constants.b2}.${constants.d1}) + 
                    (${constants.b3}.${constants.d2}.${constants.a1}) +
                    (${constants.d3}.${constants.a2}.${constants.b1})
                  ] 
            }
             `}
        </div>
    )
}