// SPDX-License-Identifier: MIT  // Explicitly state the license for clarity

pragma solidity >=0.6.12 <0.9.0; // Specify Solidity version compatibility

// Contract for managing professor reviews within a decentralized system
contract ReviewSystem {

    // Structure to represent a single review
    struct Review {
        string message; // Textual content of the review
    }

    // Mapping to store reviews for each professor, using their ID as the key
    mapping(uint8 => Review[]) internal professorReviews;

    // Function to add a new review for a professor
    function addReview(uint8 professorNumber, string memory message) public {
        // Validate professor number within the supported range
        require(
            professorNumber >= 1 && professorNumber <= 10,
            "Invalid professor number. Must be between 1 and 10."
        );

        // Create a new review instance
        Review memory newReview;
        newReview.message = message;

        // Add the review to the corresponding professor's array
        professorReviews[professorNumber].push(newReview);
    }

    // Function to retrieve all reviews for a specific professor
    function getReviewsForProfessor(uint8 professorNumber)
        public
        view
        returns (Review[] memory)
    {
        // Validate professor number within the supported range
        require(
            professorNumber >= 1 && professorNumber <= 10,
            "Invalid professor number. Must be between 1 and 10."
        );

        // Return the array of reviews for the specified professor
        return professorReviews[professorNumber];
    }
}
