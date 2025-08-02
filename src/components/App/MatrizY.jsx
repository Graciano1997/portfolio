export const MatrizY = ({iconComponent, sysNumber=2, constants={a1:'a1',a2:'a2',a3:'a3',c1:'c1',c2:'c2',c3:'c3',d1:'d1',d2:'d2',d3:'d3'}}) => {
    return (
        <div className="flex text-white mt-5 items-center gap-2">
            {sysNumber==2 &&
                <>
                {iconComponent}=
                <div className="grid grid-cols-2 grid-rows-2 p-1" style={{ borderLeft: '2px solid white', borderRight: '2px solid white' }}>
                    <div className="p-2">{constants.a1}</div>
                    <div className="p-2">{constants.c1}</div>
                    <div className="p-2">{constants.a2}</div>
                    <div className="p-2">{constants.c2}</div>
                </div>
                = {`(${constants.a1}.${constants.c2} - (${constants.a2}.${constants.c1}))`}

                </>
            }

            {sysNumber==3 &&
            (
                <>
                {iconComponent}=
            <div className="grid grid-cols-2 grid-rows-1 p-1" style={{ borderLeft: '2px solid white', borderRight: '2px solid white' }}>
            
            <div style={{borderRight:'2px dashed white'}} className="grid grid-cols-3 grid-rows-3 pr-2 ">
                <div className="p-2">{constants.a1}</div>
                <div className="p-2">{constants.d1}</div>
                <div className="p-2">{constants.c1}</div>
                
                <div className="p-2">{constants.a2}</div>
                <div className="p-2">{constants.d2}</div>
                <div className="p-2">{constants.c2}</div>
                
                <div className="p-2">{constants.a3}</div>
                <div className="p-2">{constants.d3}</div>
                <div className="p-2">{constants.c3}</div>

                </div>
                <div className="grid grid-cols-2 grid-rows-3">
                <div className="p-2">{constants.a1}</div>
                <div className="p-2">{constants.d1}</div>

                <div className="p-2">{constants.a2}</div>
                <div className="p-2">{constants.d2}</div>
                
                <div className="p-2">{constants.a3}</div>
                <div className="p-2">{constants.d3}</div>
                </div>
            </div>
            = {`{
                  [ (${constants.a1}.${constants.d2}.${constants.c3}) + 
                    (${constants.d1}.${constants.c2}.${constants.a3}) +
                    (${constants.c1}.${constants.a2}.${constants.d3})
                  ] -
                  [ (${constants.a3}.${constants.d2}.${constants.c1}) + 
                    (${constants.d3}.${constants.c2}.${constants.a1}) +
                    (${constants.c3}.${constants.a2}.${constants.d1})
                  ] 
            }
             `}
                </>
            )}
        </div>
    )
}