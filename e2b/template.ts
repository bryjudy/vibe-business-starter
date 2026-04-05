import { Template } from 'e2b';

// vibe-starter template v2
// Pre-bakes: Node 20, pnpm, claude CLI, all node_modules from the starter repo
// /home/user/template is a ready-to-hardlink copy of the app at sandbox creation time
export const template = Template()
  .fromNodeImage('20')
  // All root-level installs must happen before setUser('user')
  .setUser('root')
  .aptInstall(['git', 'curl', 'python3', 'build-essential'])
  // Install pnpm + claude CLI globally as root
  .runCmd('npm install -g pnpm@9')
  .runCmd('npm install -g @anthropic-ai/claude-code')
  // Set git safe directory globally
  .runCmd('git config --global --add safe.directory "*"')
  // Clone the starter repo and pre-install all deps
  .runCmd('git clone --depth=1 --branch=main https://github.com/bryjudy/vibe-business-starter.git /home/user/template')
  .runCmd('cd /home/user/template && pnpm install --frozen-lockfile')
  // Remove .git so each sandbox starts fresh
  .runCmd('rm -rf /home/user/template/.git')
  // Fix ownership before switching to user
  .runCmd('chown -R user:user /home/user')
  .setUser('user');
