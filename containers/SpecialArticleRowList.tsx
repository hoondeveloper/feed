import { UIEvent, useCallback, useEffect, useRef, useState } from 'react';
import SpecialArticleRow from '../components/ArticleRow/SpecialArticleRow';
import { FRAME_PADDING_DEFAULT, FRAME_PADDING_MOBILE } from '../constants/paddings';
import { styled } from '../stitches.config';

export default function SpecialArticleRowList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolledLeft, setScrolledLeft] = useState(false);
  const [scrolledRight, setScrolledRight] = useState(false);

  const onScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const scrollWidth = event.currentTarget.scrollWidth;
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (scrollWidth <= vw) {
      return;
    }

    if (scrollLeft === 0) {
      setScrolledLeft(false);
    }

    if (scrollLeft + vw === scrollWidth) {
      setScrolledRight(false);
    } else if (scrollLeft > 0) {
      setScrolledLeft(true);
      setScrolledRight(true);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current?.scrollWidth) {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      if (scrollRef.current.scrollWidth > vw) {
        setScrolledRight(true);
      }
    }
  }, [scrollRef]);

  return (
    <SpecialArticleRowListContainer>
      <ScrollArea ref={scrollRef} onScroll={onScroll}>
        <SpecialArticleRow>
          <SpecialArticleRow.Image src="/assets/lol.jpeg" alt="롤" />
          <SpecialArticleRow.Title>{`롤 중독자\n임지훈`}</SpecialArticleRow.Title>
        </SpecialArticleRow>
        <SpecialArticleRow>
          <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
          <SpecialArticleRow.Title>{`토스\n토스토스`}</SpecialArticleRow.Title>
        </SpecialArticleRow>
        <SpecialArticleRow>
          <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
          <SpecialArticleRow.Title>{`토스\n토스토스`}</SpecialArticleRow.Title>
        </SpecialArticleRow>
        <SpecialArticleRow>
          <SpecialArticleRow.Image src="/assets/toss.jpeg" alt="토스" />
          <SpecialArticleRow.Title>{`토스\n토스토스`}</SpecialArticleRow.Title>
        </SpecialArticleRow>
      </ScrollArea>
      <ScrollShadow type="left" invisible={!scrolledLeft} />
      <ScrollShadow type="right" invisible={!scrolledRight} />
    </SpecialArticleRowListContainer>
  );
}

const SpecialArticleRowListContainer = styled('section', {
  position: 'relative'
});

const ScrollArea = styled('div', {
  display: 'flex',
  overflow: 'scroll',
  position: 'relative',
  justifyContent: 'center',
  '@media (max-width: 1140px)': {
    justifyContent: 'flex-start'
  },
  spaceX: '20px',
  width: '100%',
  boxSizing: 'border-box',
  /** Safari Scroll Padding Issue */
  'a:last-child > article': {
    marginRight: `${FRAME_PADDING_MOBILE}px`
  },
  padding: `12px 0 ${FRAME_PADDING_MOBILE}px ${FRAME_PADDING_MOBILE}px`,
  '@bp2': {
    'a:last-child > article': {
      marginRight: `${FRAME_PADDING_DEFAULT}px`
    },
    padding: `12px 0 ${FRAME_PADDING_DEFAULT}px ${FRAME_PADDING_DEFAULT}px`
  },
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none'
});

const ScrollShadow = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: 50,
  pointerEvents: 'none',
  transitionProperty: 'opacity',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '200ms',
  variants: {
    type: {
      right: {
        right: 0,
        background:
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 200) 100%)'
      },
      left: {
        left: 0,
        background:
          'linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 200) 100%)'
      }
    },
    invisible: {
      true: {
        opacity: 0
      }
    }
  },
  defaultVariants: {
    type: 'right'
  }
});