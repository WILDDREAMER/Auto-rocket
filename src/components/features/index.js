export default function Features({ features }) {
    return (
        <div className='features'>
            {
                features.map((feature, index) => {
                    return (
                        <div className='feature' key={index}>
                            <p className='title'>{feature.title}</p>
                            {
                                feature.text.map((item, index) => {
                                    return <p key={index} className='text'>{item}</p>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}