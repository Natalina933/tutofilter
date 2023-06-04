import Image from 'next/image'

const ProductCard = (props) => {
    const { id, title, description, price, rating, image } = props.product
    return (
        <div className='max-w-[260px] bg-[#1b1b1b] shadow-md rounded-2xl'>
            <Image
                src={image}
                alt='Image du produit'
                width={260}
                height={250}
                className="object-cover rounded-t-2xl"
            />
            <div className='relative h-48 p-3'>
                <h1 className='font-medium text-2xl'>{title}</h1>
                <h3>Rating</h3>
                <p className='max-h-24 break-words'>{description}</p>
                <div className='absolute bottom-2 w-full pr-6 flex justify-between items-center'>
                    <span className='text-xl'>{price}</span>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
