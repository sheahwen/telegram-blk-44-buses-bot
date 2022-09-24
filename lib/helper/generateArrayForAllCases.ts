export const generateCommandForAllCases = (command: string) => {
  return [
    command.toLowerCase(),
    command.toUpperCase(),
    command.charAt(0).toUpperCase() + command.slice(1),
  ];
};
