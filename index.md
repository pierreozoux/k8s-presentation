# k8s presentation

13 June 2017



# Objectives of the session

 - helm
 - kubectl
 - k8zation process



# Helm

 - templating
 - package manager
 - upgrade/rollback


# Vocabulary

 - chart
 - release


# commands

 - upgrade
 - list
 - history
 - rollback



# kubectl


# config

Switch k8s cluster:
```
kubectl config use-context
```


# Resources

![resources](/images/resources.png)

Note:
                                        elb
                                         +
                                         |
                                         |
     +----------------------------------------+
     |ns                                 |    |
     |                                   v    |
     |                                  svc   |
     |                     +----------------+ |
     |                     |   po           | |
     |                     |                | |
     |                     |             po | |
     |                     |                | |
     | deploy +--> rs +--> |                | |
     |                     |     po         | |
     |                     |                | |
     |                     +----------------+ |
     |                                        |
     |                           secrets      |
     |                                        |
     +----------------------------------------+


# Type of resources

 - deploy (deployment)
 - rs (replica set)
 - po (pods)
 - ns (namespace)
 - svc (service)
 - secrets


# action on resources

 - get
 - describe
 - edit
 - delete

options

 - `-n` (--namespace)
 - `--all-namespaces`

# pods

 - exec
 - logs
 - `-c`



# k8zation


# 12factorization

 - log to stodout/stderr
 - conf from env
 - remove secrets (!)
 - identify services/secrets
 - s/passenger/(puma || unicorn)/g


# Docker

 - Good Docker
 - Good doceker-compose for devs
 - small / start&stop fast / minimal


# Helm package

 - deploy
 - svc
 - default values


# Jenkinsfile

 - docker build
 - docker push ECR
 - helm upgrade
