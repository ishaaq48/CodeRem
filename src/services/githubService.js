const axios = require('axios');
const { GITHUB_API_URL, GITHUB_API_TOKEN, REPOSITORY_OWNER, REPOSITORY_NAME } = require('../config/constants');

const fetchCommitHistory = async (startDate, endDate) => {
  const query = `
    query {
      repository(owner: "${REPOSITORY_OWNER}", name: "${REPOSITORY_NAME}") {
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 100) {
                edges {
                  node {
                    committedDate
                    tree {
                      entries {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      GITHUB_API_URL,
      { query },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const historyEdges = response.data.data.repository.defaultBranchRef.target.history.edges;

    return historyEdges.filter((edge) => {
      const commitDate = new Date(edge.node.committedDate);
      return commitDate >= startDate && commitDate <= endDate;
    }).flatMap((edge) => edge.node.tree.entries.map((entry) => entry.name));
  } catch (error) {
    console.error('Error fetching commit history:', error.message);
    return [];
  }
};

module.exports = { fetchCommitHistory };
