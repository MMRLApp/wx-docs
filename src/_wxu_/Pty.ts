/**
 * @since v213
 */
export interface Pty {
  start(
    sh: String,
    argsJson: String | null,
    envJson: String | null
  ): PtyInstance | null;
  start(
    sh: String,
    argsJson: String,
    envJson: String,
    cols: number,
    rows: number
  ): PtyInstance | null;
}

/**
 * @since v213
 */
export interface PtyInstance {
  write(data: String): void;
  kill(): void;
  resize(cols: number, rows: number): void;
}
