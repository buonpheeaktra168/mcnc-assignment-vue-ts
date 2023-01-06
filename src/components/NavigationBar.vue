<template>
    <header>
        <nav class="navbar">
            <div class="nav-links">
                <RouterLink class="link" to="/">{{ $t('navbar.home') }}</RouterLink>
                <RouterLink class="link" to="/todo">{{ $t('navbar.todo') }}</RouterLink>
                <RouterLink class="link" to="/about">{{ $t('navbar.about') }}</RouterLink>
            </div>
            <select class="select-lang" v-model="lang" @change="handleChage($event)">
                <option value="km">{{ $t("button.khmer") }}</option>
                <option value="en">{{ $t("button.english") }}</option>
            </select>
        </nav>
    </header>
</template>

<script setup lang="ts">


const lang: String = localStorage.getItem("lang") || "en";

function handleChage(event: any) {
    localStorage.setItem("lang", event.target.value);
    window.location.reload();
};
</script>

<style lang="scss" scoped>
header {

    .navbar {
        display: flex;
        padding-right: 32px;
        align-items: center;
        justify-content: center;

        .branding {

            margin: 8px;

            h2 {
                margin: 0;
                padding: 0;
            }

        }

        .nav-links {
            position: relative;
            display: flex;
            flex: 1;
            color: #000;
            align-items: center;
            justify-content: center;

            ul {
                margin-right: 8px;

                .link {
                    font-size: 16px;
                    margin-right: 8px;
                    color: black;
                    text-decoration-line: none;
                }

                .link:last-child {
                    margin-right: 0;
                }

            }
        }

        .select-lang {
            display: flex;
            font-size: 12px;
            width: 40px;
            height: 40px;
            border-radius: 20px;

        }
    }
}

@media (max-width: 913px) {
    header {
        background-color: #ffffff;
        box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
        z-index: 99;
        margin: 0;

        .link {
            font-weight: 500;
            font-size: 20px;
            padding: 0 8px;
            transition: 0.3s color ease;

            &:hover {
                color: rgb(125, 0, 241);
            }
        }

        nav {
            display: flex;

            .branding {
                display: flex;
                align-items: center;
            }

            .nav-links {
                position: relative;
                display: flex;
                flex: 1;
                color: #000;
                align-items: center;
                justify-content: flex-end;

                ul {
                    margin-right: 8px;

                    .link {
                        margin-right: 8px;
                        color: black;
                        text-decoration-line: none;
                    }

                    .link:last-child {
                        margin-right: 0;
                    }

                }
            }
        }
    }
}

@media (max-width: 821px) {
    header {
        background-color: #ffffff;
        box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
        z-index: 99;
        margin: 0;

        .link {
            font-weight: 500;
            font-size: 20px;
            padding: 0 8px;
            transition: 0.3s color ease;

            &:hover {
                color: rgb(125, 0, 241);
            }
        }

        nav {
            display: flex;

            .branding {
                display: flex;
                align-items: center;
            }

            .nav-links {
                position: relative;
                display: flex;
                flex: 1;
                color: #000;
                align-items: center;
                justify-content: flex-end;

                ul {
                    margin-right: 8px;

                    .link {
                        margin-right: 8px;
                        color: black;
                        text-decoration-line: none;
                    }

                    .link:last-child {
                        margin-right: 0;
                    }

                }
            }
        }
    }
}

@media (max-width: 376px) {
    header {
        background-color: #ffffff;
        box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
        z-index: 99;
        margin: 0;

        .link {
            transition: 0.3s color ease;

            &:hover {
                color: rgb(125, 0, 241);
            }
        }

        nav {
            display: flex;
            margin-left: -20px;
            flex-direction: column;


            .branding {
                display: flex;
                margin-left: 20px;

            }

            .nav-links {
                position: relative;


                color: #000;
                justify-content: center;
                margin: -12px;

                ul {
                    margin-right: 8px;

                    .link {
                        margin-right: 8px;
                        color: black;
                        text-decoration-line: none;
                    }

                    .link:last-child {
                        margin-right: 0;
                    }

                }
            }
        }
    }
}

@media (max-width: 541px) {
    header {
        background-color: #ffffff;
        box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
        z-index: 99;
        margin: 0;


        .link {
            transition: 0.3s color ease;

            &:hover {
                color: rgb(125, 0, 241);
            }
        }

        nav {
            display: flex;
            flex-direction: column;

            .branding {
                display: flex;
                flex: 1;
                justify-content: flex-end;

            }

            .nav-links {
                position: relative;


                color: #000;
                justify-content: center;

                ul {
                    margin-right: 8px;

                    .link {
                        margin-right: 8px;
                        color: black;
                        text-decoration-line: none;
                    }

                    .link:last-child {
                        margin-right: 0;
                    }

                }
            }
        }
    }
}

@media (max-width: 394px) {
    header {
        background-color: #ffffff;
        box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
        z-index: 99;
        margin: 0;

        .link {
            transition: 0.3s color ease;

            &:hover {
                color: rgb(125, 0, 241);
            }
        }

        nav {
            display: flex;
            flex-direction: column;
            flex: 1;

            .branding {
                display: flex;
                margin-left: 20px;

            }

            .nav-links {
                position: relative;


                color: #000;
                justify-content: center;
                margin: -12px;

                ul {
                    margin-right: 8px;

                    .link {
                        margin-right: 8px;
                        color: black;
                        text-decoration-line: none;
                    }

                    .link:last-child {
                        margin-right: 0;
                    }

                }
            }
        }
    }
}

@media (max-width: 360px) {
    header {
        background-color: #ffffff;
        box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
        z-index: 99;
        margin: 0;

        .link {
            transition: 0.3s color ease;

            &:hover {
                color: rgb(125, 0, 241);
            }
        }

        nav {
            display: flex;
            flex-direction: column;
            flex: 1;

            .branding {
                display: flex;
                margin-left: 20px;
                margin-bottom: 12px;

            }

            .nav-links {
                position: relative;


                color: #000;
                justify-content: center;
                margin: -14px;

                ul {
                    margin-right: 0px;

                    .link {
                        margin-right: 8px;
                        color: black;
                        text-decoration-line: none;
                    }

                    .link:last-child {
                        margin-right: 0;
                    }

                }
            }
        }
    }
}

@media (max-width: 281px) {
    header {
        background-color: #ffffff;
        box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
        z-index: 99;
        margin: 0;

        .link {
            transition: 0.3s color ease;

            &:hover {
                color: rgb(125, 0, 241);
            }
        }

        nav {
            display: flex;
            flex-direction: column;
            flex: 1;

            .branding {
                display: flex;
                margin-left: 20px;
                margin-bottom: 12px;

            }

            .nav-links {
                position: relative;


                color: #000;
                justify-content: center;
                margin: -14px;

                ul {
                    margin-right: 0px;

                    .link {
                        font-size: 13px;
                        margin-right: 0px;
                        color: black;
                        text-decoration-line: none;
                    }

                    .link:last-child {
                        margin-right: 0;
                    }

                }
            }
        }
    }
}
</style>