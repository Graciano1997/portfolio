export const MatrizY = ({iconComponent,constants={a1:'a1',a2:'a2',c1:'c1',c2:'c2'}}) => {
    return (
        <div className="flex text-white mt-5 items-center gap-2">
            {iconComponent}=
            <div className="grid grid-cols-2 grid-rows-2 p-1" style={{ borderLeft: '2px solid white', borderRight: '2px solid white' }}>
                <div className="p-2">{constants.a1}</div>
                <div className="p-2">{constants.c1}</div>
                <div className="p-2">{constants.a2}</div>
                <div className="p-2">{constants.c2}</div>
            </div>
            = {`(${constants.a1}.${constants.c2} - ${constants.a2}.${constants.c1})`}
        </div>
    )
}