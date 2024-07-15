import { Rating } from '@/components';
import { PostTypes } from '@/types';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

export const ReviewsCard = ({ data }: { data: PostTypes }) => {
  const authorUsername = data.author.node.name;

  return (
    <Link href={`reviews/${data.slug}`} className="reviews__item">
      <div className="reviews__content">
        <div className="reviews__author">
          <span>{authorUsername}</span>
          <Image
            src={data.author.node.avatar.url}
            alt={`image for ${authorUsername}`}
            width={40}
            height={40}
          />
        </div>
        <div>
          <div className="reviews__details">
            <Rating score={parseInt(data.reviewFields.rating[0])} />
            <span className="reviews__title">{data.title}</span>
            <span>Published:{dayjs(data.date).format('MM/DD/YY')}</span>
          </div>
        </div>
      </div>

      <div className="reviews__background">
        <Image
          src={data?.featuredImage?.node?.sourceUrl}
          alt={data.title}
          width={330}
          height={490}
        />
      </div>
    </Link>
  );
};
