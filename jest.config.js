// /** @returns {Promise<import('jest').Config>} */
// module.exports = async () => {
//   return {
//     moduleDirectories: ['./node_modules', 'src'],
//     verbose: true,
//   };
// };


module.exports = {
  // roots: ['<rootDir>/src'],
  "bail": true,
  "verbose": true,
   "testEnvironment": "jest-environment-node",
  // rootDir: ["."],
  // collectCoverageFrom: [
  //   '<rootDir>/src/**/*.{ts,tsx}',
  //   '!<rootDir>/src/main/**/*',
  //   '!<rootDir>/src/**/index.ts',
  //   '!**/*.d.ts'
  // ],
  // coverageDirectory: 'coverage',
  // setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  // testPathIgnorePatterns: [
  //   '<rootDir>/node_modules/',
  //   '<rootDir>/src/main/test/cypress'
  // ],
  // testEnvironment: 'jsdom',
  // transform: {
  //   '.+\\.(ts|tsx)$': 'ts-jest'
  // },
  // moduleNameMapper: {
  //   '@/(.*)': '<rootDir>/src/$1',
  //   '\\.scss$': 'identity-obj-proxy'
  // }
}