01) **OS**: An intermediary between the user and computer hardware.
   - **Goals**: Execute user programs, ease use, and manage hardware efficiently.
   - **Roles**: Resource allocator and control program.
02) **Computer System Structure**: Four main components—Hardware (CPU, memory, I/O), OS (coordinates hardware), Application Programs (utilize resources), Users.
03) **Key OS Functions**:
   - **Process Management**: Handles execution, synchronization, communication.
   - **Memory Management**: Optimizes CPU use, allocates memory.
   - **Storage Management**: Abstracts physical storage, manages files.
   - **Protection & Security**: Controls access, defends against threats.
04) **OS Structure/Operations**:
   - **Dual-Mode Operation**: Distinguishes user and kernel modes.
   - **Interrupts**: Essential for event responses.
   - **System Calls**: Requests OS services.
05) **System Architecture**:
   - **Single/Multiprocessor Systems**: Symmetric/asymmetric multiprocessing.
   - **Clustered Systems**: Multiple systems for high availability.
06) **Storage & I/O**:
   - **Hierarchy**: Differentiated by speed, cost, volatility.
   - **Caching**: Enhances performance.
   - **DMA**: Efficient I/O without CPU intervention.
07) **Kernel Data Structures**: Uses lists, trees, hash functions.
08) **Computing Environments**:
   - **Traditional, Mobile, Distributed**: Focus on connectivity.
   - **Client-Server, P2P**: Resource sharing models.
   - **Virtualization, Cloud, Real-Time Systems**: Multi-OS, service delivery.
09) **Open-Source OS**: Promotes exploration with source-code availability.
10) **OS Services**: Include resource allocation, user interface, program execution, file/I/O operations, error detection.
11) **User Interfaces**:
   - **CLI**: Command entry.
   - **GUI**: User-friendly with icons.
   - **Touchscreen**: Gestures, virtual keyboards.
12) **System Calls & APIs**: Interfaces for OS services with parameter passing via registers, memory blocks, or stacks.
13) **System Call Types**:
   - **Process Control**: Create/terminate processes.
   - **File/Device Management**: Operations on files/devices.
   - **Communication/Protection**: Message passing, permissions.
14) **System Programs**: Tools for file management, program support, communication.
15) **OS Design**:
   - **Goals**: User convenience, system reliability.
   - **Policy vs. Mechanism**: Separation for flexibility.
16) **OS Structures**:
   - **Simple (MS-DOS)**, **Layered**, **Microkernel**, **Modular**, **Hybrid**.
17) **Debugging/Performance Tuning**: Logs, dumps, tools for optimizing performance.
18) **System Boot**: Bootstrap loader loads OS kernel from firmware.
19) **Processes**:
   - **Concept**: Program in execution with code, stack, data, heap.
   - **State**: New, running, waiting, ready, terminated.
   - **PCB**: Contains process state, program counter, registers.
20) **Process Scheduling**:
   - **Schedulers**: Short-term (CPU), long-term, medium-term.
   - **Queues**: Job, ready, device.
21) **Context Switching**: Saving/loading process states—time overhead.
22) **Process Operations**:
   - **Creation/Termination**: Processes create children (tree structure), terminate using `exit()`, `abort()`.
23) **Interprocess Communication (IPC)**:
   - **Models**: Shared memory (needs synchronization), message passing (`send()`, `receive()`).
24) **IPC Systems**:
   - **POSIX**: Shared memory functions (`shm_open()`).
   - **Mach**: Message-based with mailboxes.
   - **Windows**: Local procedure calls (LPC).
25) **Client-Server Communication**:
   - **Sockets**: Network communication via IP/port.
   - **RPCs, Pipes, RMI**: Other methods for communication.
