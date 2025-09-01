-- CreateTable
CREATE TABLE `Receita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `tipo` ENUM('DOCE', 'SALGADA', 'BEBIDA') NOT NULL,
    `ingredientes` VARCHAR(191) NOT NULL,
    `modoFazer` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `custoAproximado` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
