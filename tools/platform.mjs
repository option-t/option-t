import * as os from 'os';

export function getSuffixedCommandName(command) {
    const suffix = (os.platform() === 'win32') ? '.cmd' : '';
    const name = command + suffix;
    return name;
}
