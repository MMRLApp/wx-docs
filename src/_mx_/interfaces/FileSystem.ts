/**
 * Represents a readable byte stream.
 */
export interface InputStream {
    /**
     * Reads a single byte from the stream.
     *
     * @returns The byte value, or `-1` if the end of the stream has been reached.
     */
    read(): number

    /**
     * Reads bytes into the provided buffer.
     *
     * @param b Destination buffer.
     * @returns Number of bytes read, or `-1` if the end of the stream has been reached.
     */
    read(b: Array<number>): number

    /**
     * Reads up to `len` bytes into the provided buffer starting at `off`.
     *
     * @param b Destination buffer.
     * @param off Offset within the buffer to begin writing.
     * @param len Maximum number of bytes to read.
     * @returns Number of bytes read, or `-1` if the end of the stream has been reached.
     */
    read(b: Array<number>, off: number, len: number): number

    /**
     * Skips over and discards bytes from the stream.
     *
     * @param n Number of bytes to skip.
     * @returns Actual number of bytes skipped.
     */
    skip(n: number): number

    /**
     * Marks the current position in the stream.
     *
     * @param readLimit Maximum number of bytes that can be read before the mark becomes invalid.
     */
    mark(readLimit: number): void

    /**
     * Resets the stream position to the last marked location.
     */
    reset(): void

    /**
     * Indicates whether this stream supports mark/reset operations.
     */
    markSupported(): void

    /**
     * Returns the number of bytes that can be read without blocking.
     *
     * @returns Number of available bytes.
     */
    available(): number

    /**
     * Closes the stream and releases any associated resources.
     */
    close(): void
}

/**
 * Represents a writable byte stream.
 */
export interface OutputStream {
    /**
     * Writes the provided bytes to the stream.
     *
     * @param chunk Bytes to write.
     */
    write(chunk: Array<number>): void

    /**
     * Closes the stream and releases any associated resources.
     */
    close(): void
}

/**
 * Options used when reading or writing files.
 */
export type FileOptions = {
    /**
     * Character encoding used for file contents.
     *
     * @default "UTF-8"
     */
    encoding: string

    /**
     * File open flags.
     * Use the constants exposed by {@link FileSystem}.
     */
    flags: number

    /**
     * File permission mode.
     */
    mode: number
}

export interface FileSystemConstants {
    /**
        * Error if the file already exists.
        */
    O_EXCL: number

    /**
     * Do not assign the opened file as the controlling terminal.
     */
    O_NOCTTY: number

    /**
     * Fail if the target path is a symbolic link.
     */
    O_NOFOLLOW: number

    /**
     * Open file in non-blocking mode.
     */
    O_NONBLOCK: number

    /**
     * Open file for read-only access.
     */
    O_RDONLY: number

    /**
     * Open file for both reading and writing.
     */
    O_RDWR: number

    /**
     * Synchronous I/O file integrity completion.
     */
    O_SYNC: number

    /**
     * Synchronized data I/O completion.
     *
     * Below Android 8.1 this value will be `0`.
     */
    O_DSYNC: number

    /**
     * Truncate the file to zero length when opening.
     */
    O_TRUNC: number

    /**
     * Open file for write-only access.
     */
    O_WRONLY: number

    /**
     * Mask for access mode bits.
     */
    O_ACCMODE: number

    /**
     * Append all writes to the end of the file.
     */
    O_APPEND: number

    /**
     * Close the file descriptor on process execution.
     *
     * Below Android 8.1 this value will be `0`.
     */
    O_CLOEXEC: number

    /**
     * Create the file if it does not already exist.
     */
    O_CREAT: number
}

/**
 * Provides access to filesystem operations and POSIX-style file flags.
 */
export interface FileSystem {
    constants: FileSystemConstants

    /**
     * Reads a file asynchronously.
     *
     * @param path Path to the file.
     * @param options File reading options.
     * @returns The file contents.
     */
    readFile(path: string, options: FileOptions): Promise<string>

    /**
     * Reads a file synchronously.
     *
     * @param path Path to the file.
     * @param options File reading options.
     * @returns The file contents, or `null` if the read fails.
     */
    readFileSync(path: string, options: FileOptions): string | null

    /**
     * Writes a file asynchronously.
     *
     * @param path Path to the file.
     * @param options File writing options.
     */
    writeFile(path: string, options: FileOptions): Promise<void>

    /**
     * Tests whether the current process can access a file.
     *
     * @param path Path to the file.
     * @param mode Access mode to check.
     * @returns `true` if access is allowed; otherwise `false`.
     */
    access(path: string, mode: number): Promise<boolean>

    /**
     * Tests whether the current process can access a file.
     *
     * @param path Path to the file.
     * @param mode Access mode to check.
     * @returns `true` if access is allowed; otherwise `false`.
     */
    accessSync(path: string, mode: number): boolean

    /**
     * Opens a file as an input stream.
     *
     * @param path Path to the file.
     * @param options Stream open options. The `encoding` option is not applicable.
     * @returns A readable input stream.
     */
    inputstream(
        path: string,
        options: Omit<FileOptions, "encoding">
    ): Promise<InputStream>

    /**
     * Opens a file as an output stream.
     *
     * @param path Path to the file.
     * @param options Stream open options. The `encoding` option is not applicable.
     * @returns A writable output stream.
     */
    outputstream(
        path: string,
        options: Omit<FileOptions, "encoding">
    ): Promise<OutputStream>
}

/**
 * Global filesystem API instance.
 */
export  var fs: FileSystem