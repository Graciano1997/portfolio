export const MatrizX = ({iconComponent,constants={c1:'c1',c2:'c2',b1:'b1',b2:'b2'}}) => {
    return (
        <div className="flex text-white mt-5 items-center gap-2">
            {iconComponent}=
            <div className="grid grid-cols-2 grid-rows-2 p-1" style={{ borderLeft: '2px solid white', borderRight: '2px solid white' }}>
                <div className="p-2">{constants.c1}</div>
                <div className="p-2">{constants.b1}</div>
                <div className="p-2">{constants.c2}</div>
                <div className="p-2">{constants.b2}</div>
            </div>
            = {`(${constants.c1}.${constants.b2} - ${constants.c2}.${constants.b1})`}
        </div>
    )
}