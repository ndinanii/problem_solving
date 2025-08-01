public class NumberDifference {
    // Calculates the absolute difference between two integers
    // Returns null if either input is null
    // If a > b, returns a - b; otherwise returns b - a
    public Integer diff(Integer a, Integer b) {
    // Handle null inputs (optional)
        if (a == null || b == null) {
        return null; // or throw an exception
        }
    
    // Compare and calculate absolute difference
        if (a > b) {
        return a - b;
        } else {
        return b - a;
        }
    }
}


