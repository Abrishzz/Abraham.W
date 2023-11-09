import { VisuallyHidden } from 'components/VisuallyHidden';
import { useReducedMotion, useSpring } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import { delay } from 'utils/delay';
import { classes } from 'utils/style';
import styles from './DecoderText.module.css';

// prettier-ignore
const glyphs = [
  'ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ',
  'ህ', 'ሆ', 'ለ', 'ሉ', 'ሊ',
  'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ',
  'ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ',
  'ሕ', 'ሖ', 'ሗ', 'መ', 'ሙ',
  'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ',
  'ሟ', 'ሠ', 'ሡ', 'ሢ', 'ሣ',
  'ሤ', 'ሥ', 'ሦ', 'ሧ', 'ረ',
  'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር',
  'ሮ', 'ሯ', 'ሰ', 'ሱ', 'ሲ',
  'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ',
  'ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ',
  'ሽ', 'ሾ', 'ሿ', 'ቀ', 'ቁ',
  'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ',
  'በ', 'ቡ', 'ቢ', 'ባ', 'ቤ',
  'ብ', 'ቦ', 'ቧ', 'ቨ', 'ቩ',
  'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ',
  'ቯ', 'ተ', 'ቱ', 'ቲ', 'ታ',
  'ቴ', 'ት', 'ቶ', 'ቷ', 'ቸ',
  'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች',
  'ቾ', 'ቿ', 'ኀ', 'ኁ', 'ኂ',
  'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኈ',
  'ኊ', 'ኋ', 'ኌ', 'ኍ', 'ነ',
  'ኑ', 'ኒ', 'ና', 'ኔ', 'ን',
  'ኖ', 'ኗ', 'ኘ', 'ኚ', 'ኛ',
  'ኜ', 'ኝ', 'ኞ', 'ኟ', 'አ',
  'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ',
  'ኦ', 'ኧ', 'ከ', 'ኩ', 'ኪ',
  'ካ', 'ኬ', 'ክ', 'ኮ', 'ኰ',
  'ኲ', 'ኳ', 'ኴ', 'ኵ', 'ኸ',
  'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ',
  'ኾ', 'ወ', 'ዉ', 'ዊ', 'ዋ',
  'ዌ', 'ው', 'ዎ', 'ዐ', 'ዑ',
  'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ',
  'ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ',
];

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

export const DecoderText = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: '' }]);
    const container = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      const containerInstance = container.current;
      const content = text.split('');
      let animation;

      const renderOutput = () => {
        const characterMap = output.current.map(item => {
          return `<span class="${styles[item.type]}">${item.value}</span>`;
        });

        containerInstance.innerHTML = characterMap.join('');
      };

      const unsubscribeSpring = decoderSpring.onChange(value => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content.length);
      };

      if (start && !animation && !reduceMotion) {
        startSpring();
      }

      if (reduceMotion) {
        output.current = content.map((value, index) => ({
          type: CharType.Value,
          value: content[index],
        }));
        renderOutput();
      }

      return () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  }
);
