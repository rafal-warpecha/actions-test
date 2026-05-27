import { capitalize, truncate, isPalindrome } from '../string';

describe('string utils', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should lowercase remaining letters', () => {
      expect(capitalize('hELLO')).toBe('Hello');
    });

    it('should return empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
    });

    it('should not truncate short strings', () => {
      expect(truncate('Hi', 10)).toBe('Hi');
    });

    it('should not truncate when length equals maxLength', () => {
      expect(truncate('Hello', 5)).toBe('Hello');
    });
  });

  describe('isPalindrome', () => {
    it('should detect palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    it('should detect palindrome ignoring case', () => {
      expect(isPalindrome('Racecar')).toBe(true);
    });

    it('should return false for non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    it('should handle phrase palindromes', () => {
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });
  });
});
