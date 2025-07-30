public class AorAn {
    // Determines if a word should be preceded by "a" or "an"
    public static String determineArticle(String word) {
        if (word == null || word.isEmpty()) {
            return ''; // Return empty string for null or empty input
        }
        
        // Check the first letter of the word
        char firstChar = Character.toLowerCase(word.charAt(0));
        
        // Determine if the article should be "a" or "an"
        if ('aeiou'.indexOf(firstChar) >= 0) {
            return 'an';
        } else {
            return 'a';
        }
    }
}