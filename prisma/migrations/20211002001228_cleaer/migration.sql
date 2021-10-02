-- CreateTable
CREATE TABLE `Filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `imagem` VARCHAR(191),
    `release_date` DATETIME(3) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `role` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilmeToGenre` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilmeToGenre_AB_unique`(`A`, `B`),
    INDEX `_FilmeToGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilmeToParticipants` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilmeToParticipants_AB_unique`(`A`, `B`),
    INDEX `_FilmeToParticipants_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FilmeToGenre` ADD FOREIGN KEY (`A`) REFERENCES `Filme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToGenre` ADD FOREIGN KEY (`B`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToParticipants` ADD FOREIGN KEY (`A`) REFERENCES `Filme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToParticipants` ADD FOREIGN KEY (`B`) REFERENCES `Participants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
