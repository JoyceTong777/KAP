import { Resource } from './resource';

export const RESOURCES: Resource[] = [
  {
    "services": [
      {
        "metadata": {
          "name": "kubernetes",
          "namespace": "default",
          "selfLink": "/api/v1/namespaces/default/services/kubernetes",
          "uid": "06d57818-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "7",
          "creationTimestamp": "2016-11-13T19:33:17Z",
          "labels": {
            "component": "apiserver",
            "provider": "kubernetes"
          }
        },
        "spec": {
          "ports": [
            {
              "name": "https",
              "protocol": "TCP",
              "port": 443,
              "targetPort": 443
            }
          ],
          "clusterIP": "10.107.240.1",
          "type": "ClusterIP",
          "sessionAffinity": "ClientIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "metadata": {
          "name": "default-http-backend",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/services/default-http-backend",
          "uid": "3ac785ea-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "127",
          "creationTimestamp": "2016-11-13T19:34:44Z",
          "labels": {
            "k8s-app": "glbc",
            "kubernetes.io/cluster-service": "true",
            "kubernetes.io/name": "GLBCDefaultBackend"
          }
        },
        "spec": {
          "ports": [
            {
              "name": "http",
              "protocol": "TCP",
              "port": 80,
              "targetPort": 8080,
              "nodePort": 31898
            }
          ],
          "selector": {
            "k8s-app": "glbc"
          },
          "clusterIP": "10.107.255.27",
          "type": "NodePort",
          "sessionAffinity": "None"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "metadata": {
          "name": "heapster",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/services/heapster",
          "uid": "3a873a01-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "100",
          "creationTimestamp": "2016-11-13T19:34:44Z",
          "labels": {
            "kubernetes.io/cluster-service": "true",
            "kubernetes.io/name": "Heapster"
          }
        },
        "spec": {
          "ports": [
            {
              "protocol": "TCP",
              "port": 80,
              "targetPort": 8082
            }
          ],
          "selector": {
            "k8s-app": "heapster"
          },
          "clusterIP": "10.107.247.11",
          "type": "ClusterIP",
          "sessionAffinity": "None"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "metadata": {
          "name": "kube-dns",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/services/kube-dns",
          "uid": "3a8ddb48-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "103",
          "creationTimestamp": "2016-11-13T19:34:44Z",
          "labels": {
            "k8s-app": "kube-dns",
            "kubernetes.io/cluster-service": "true",
            "kubernetes.io/name": "KubeDNS"
          }
        },
        "spec": {
          "ports": [
            {
              "name": "dns",
              "protocol": "UDP",
              "port": 53,
              "targetPort": 53
            },
            {
              "name": "dns-tcp",
              "protocol": "TCP",
              "port": 53,
              "targetPort": 53
            }
          ],
          "selector": {
            "k8s-app": "kube-dns"
          },
          "clusterIP": "10.107.240.10",
          "type": "ClusterIP",
          "sessionAffinity": "None"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "metadata": {
          "name": "kubernetes-dashboard",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/services/kubernetes-dashboard",
          "uid": "3a8ee895-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "105",
          "creationTimestamp": "2016-11-13T19:34:44Z",
          "labels": {
            "k8s-app": "kubernetes-dashboard",
            "kubernetes.io/cluster-service": "true"
          }
        },
        "spec": {
          "ports": [
            {
              "protocol": "TCP",
              "port": 80,
              "targetPort": 9090
            }
          ],
          "selector": {
            "k8s-app": "kubernetes-dashboard"
          },
          "clusterIP": "10.107.248.81",
          "type": "ClusterIP",
          "sessionAffinity": "None"
        },
        "status": {
          "loadBalancer": {}
        }
      }
    ],
    "pods": [
      {
        "metadata": {
          "name": "fluentd-cloud-logging-gke-cluster-kap-default-pool-07c56901-51cp",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/fluentd-cloud-logging-gke-cluster-kap-default-pool-07c56901-51cp",
          "uid": "50072d3d-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "295",
          "creationTimestamp": "2016-11-13T19:35:20Z",
          "labels": {
            "k8s-app": "fluentd-logging"
          },
          "annotations": {
            "kubernetes.io/config.hash": "d80fb8aa36d238ab5c6990d354d39176",
            "kubernetes.io/config.mirror": "d80fb8aa36d238ab5c6990d354d39176",
            "kubernetes.io/config.seen": "2016-11-13T19:34:45.104573301Z",
            "kubernetes.io/config.source": "file"
          }
        },
        "spec": {
          "volumes": [
            {
              "name": "varlog",
              "hostPath": {
                "path": "/var/log"
              }
            },
            {
              "name": "varlibdockercontainers",
              "hostPath": {
                "path": "/var/lib/docker/containers"
              }
            },
            {
              "name": "journaldir",
              "hostPath": {
                "path": "/var/log/journal"
              }
            },
            {
              "name": "libsystemddir",
              "hostPath": {
                "path": "/usr/lib64"
              }
            }
          ],
          "containers": [
            {
              "name": "fluentd-cloud-logging",
              "image": "gcr.io/google_containers/fluentd-gcp:1.21",
              "command": [
                "/bin/sh",
                "-c",
                "rm /lib/x86_64-linux-gnu/libsystemd* \u0026\u0026 cp /host/lib/libsystemd* /lib/x86_64-linux-gnu/ \u0026\u0026 /usr/sbin/google-fluentd -q -c /etc/google-fluentd/google-fluentd-journal.conf"
              ],
              "resources": {
                "limits": {
                  "memory": "200Mi"
                },
                "requests": {
                  "cpu": "80m",
                  "memory": "200Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "varlog",
                  "mountPath": "/var/log"
                },
                {
                  "name": "varlibdockercontainers",
                  "readOnly": true,
                  "mountPath": "/var/lib/docker/containers"
                },
                {
                  "name": "journaldir",
                  "mountPath": "/var/log/journal"
                },
                {
                  "name": "libsystemddir",
                  "mountPath": "/host/lib"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "Default",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-51cp",
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:20Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:36:11Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:20Z"
            }
          ],
          "hostIP": "10.128.0.2",
          "podIP": "10.104.0.3",
          "startTime": "2016-11-13T19:35:20Z",
          "containerStatuses": [
            {
              "name": "fluentd-cloud-logging",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:11Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/fluentd-gcp:1.21",
              "imageID": "docker://sha256:0ef09b1bcfd712a196629f3aa4cdaf4f768fde0f97be2db462871baf3daeacc0",
              "containerID": "docker://ebe9e8833cf3ad0af1a9774d40089104c8e11c871b7eec09d37f30539da1fb3b"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "fluentd-cloud-logging-gke-cluster-kap-default-pool-07c56901-9rhk",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/fluentd-cloud-logging-gke-cluster-kap-default-pool-07c56901-9rhk",
          "uid": "52158d2c-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "315",
          "creationTimestamp": "2016-11-13T19:35:23Z",
          "labels": {
            "k8s-app": "fluentd-logging"
          },
          "annotations": {
            "kubernetes.io/config.hash": "d80fb8aa36d238ab5c6990d354d39176",
            "kubernetes.io/config.mirror": "d80fb8aa36d238ab5c6990d354d39176",
            "kubernetes.io/config.seen": "2016-11-13T19:34:48.562837831Z",
            "kubernetes.io/config.source": "file"
          }
        },
        "spec": {
          "volumes": [
            {
              "name": "varlog",
              "hostPath": {
                "path": "/var/log"
              }
            },
            {
              "name": "varlibdockercontainers",
              "hostPath": {
                "path": "/var/lib/docker/containers"
              }
            },
            {
              "name": "journaldir",
              "hostPath": {
                "path": "/var/log/journal"
              }
            },
            {
              "name": "libsystemddir",
              "hostPath": {
                "path": "/usr/lib64"
              }
            }
          ],
          "containers": [
            {
              "name": "fluentd-cloud-logging",
              "image": "gcr.io/google_containers/fluentd-gcp:1.21",
              "command": [
                "/bin/sh",
                "-c",
                "rm /lib/x86_64-linux-gnu/libsystemd* \u0026\u0026 cp /host/lib/libsystemd* /lib/x86_64-linux-gnu/ \u0026\u0026 /usr/sbin/google-fluentd -q -c /etc/google-fluentd/google-fluentd-journal.conf"
              ],
              "resources": {
                "limits": {
                  "memory": "200Mi"
                },
                "requests": {
                  "cpu": "80m",
                  "memory": "200Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "varlog",
                  "mountPath": "/var/log"
                },
                {
                  "name": "varlibdockercontainers",
                  "readOnly": true,
                  "mountPath": "/var/lib/docker/containers"
                },
                {
                  "name": "journaldir",
                  "mountPath": "/var/log/journal"
                },
                {
                  "name": "libsystemddir",
                  "mountPath": "/host/lib"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "Default",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-9rhk",
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:23Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:36:15Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:23Z"
            }
          ],
          "hostIP": "10.128.0.4",
          "podIP": "10.104.1.2",
          "startTime": "2016-11-13T19:35:23Z",
          "containerStatuses": [
            {
              "name": "fluentd-cloud-logging",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:15Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/fluentd-gcp:1.21",
              "imageID": "docker://sha256:0ef09b1bcfd712a196629f3aa4cdaf4f768fde0f97be2db462871baf3daeacc0",
              "containerID": "docker://bf4702fa204b256474bc560e784b9437aed3ebb7ecdc8a71d73b99b944c84a08"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "fluentd-cloud-logging-gke-cluster-kap-default-pool-07c56901-n74b",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/fluentd-cloud-logging-gke-cluster-kap-default-pool-07c56901-n74b",
          "uid": "5329b21c-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "318",
          "creationTimestamp": "2016-11-13T19:35:25Z",
          "labels": {
            "k8s-app": "fluentd-logging"
          },
          "annotations": {
            "kubernetes.io/config.hash": "d80fb8aa36d238ab5c6990d354d39176",
            "kubernetes.io/config.mirror": "d80fb8aa36d238ab5c6990d354d39176",
            "kubernetes.io/config.seen": "2016-11-13T19:34:50.341076123Z",
            "kubernetes.io/config.source": "file"
          }
        },
        "spec": {
          "volumes": [
            {
              "name": "varlog",
              "hostPath": {
                "path": "/var/log"
              }
            },
            {
              "name": "varlibdockercontainers",
              "hostPath": {
                "path": "/var/lib/docker/containers"
              }
            },
            {
              "name": "journaldir",
              "hostPath": {
                "path": "/var/log/journal"
              }
            },
            {
              "name": "libsystemddir",
              "hostPath": {
                "path": "/usr/lib64"
              }
            }
          ],
          "containers": [
            {
              "name": "fluentd-cloud-logging",
              "image": "gcr.io/google_containers/fluentd-gcp:1.21",
              "command": [
                "/bin/sh",
                "-c",
                "rm /lib/x86_64-linux-gnu/libsystemd* \u0026\u0026 cp /host/lib/libsystemd* /lib/x86_64-linux-gnu/ \u0026\u0026 /usr/sbin/google-fluentd -q -c /etc/google-fluentd/google-fluentd-journal.conf"
              ],
              "resources": {
                "limits": {
                  "memory": "200Mi"
                },
                "requests": {
                  "cpu": "80m",
                  "memory": "200Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "varlog",
                  "mountPath": "/var/log"
                },
                {
                  "name": "varlibdockercontainers",
                  "readOnly": true,
                  "mountPath": "/var/lib/docker/containers"
                },
                {
                  "name": "journaldir",
                  "mountPath": "/var/log/journal"
                },
                {
                  "name": "libsystemddir",
                  "mountPath": "/host/lib"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "Default",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-n74b",
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:25Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:36:16Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:25Z"
            }
          ],
          "hostIP": "10.128.0.3",
          "podIP": "10.104.2.2",
          "startTime": "2016-11-13T19:35:25Z",
          "containerStatuses": [
            {
              "name": "fluentd-cloud-logging",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:14Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/fluentd-gcp:1.21",
              "imageID": "docker://sha256:0ef09b1bcfd712a196629f3aa4cdaf4f768fde0f97be2db462871baf3daeacc0",
              "containerID": "docker://13967cf3faf4c80aeca8d39a66268063d9f88512edc06a671577d39deab00e59"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "heapster-v1.2.0-2168613315-ps3z0",
          "generateName": "heapster-v1.2.0-2168613315-",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/heapster-v1.2.0-2168613315-ps3z0",
          "uid": "7f6f18a5-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "428",
          "creationTimestamp": "2016-11-13T19:36:39Z",
          "labels": {
            "k8s-app": "heapster",
            "pod-template-hash": "2168613315",
            "version": "v1.2.0"
          },
          "annotations": {
            "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"kube-system\",\"name\":\"heapster-v1.2.0-2168613315\",\"uid\":\"7f6c2412-a9d8-11e6-b428-42010af00141\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"365\"}}\n",
            "scheduler.alpha.kubernetes.io/critical-pod": "",
            "scheduler.alpha.kubernetes.io/tolerations": "[{\"key\":\"CriticalAddonsOnly\", \"operator\":\"Exists\"}]"
          },
          "ownerReferences": [
            {
              "apiVersion": "extensions/v1beta1",
              "kind": "ReplicaSet",
              "name": "heapster-v1.2.0-2168613315",
              "uid": "7f6c2412-a9d8-11e6-b428-42010af00141",
              "controller": true
            }
          ]
        },
        "spec": {
          "volumes": [
            {
              "name": "default-token-oxzrf",
              "secret": {
                "secretName": "default-token-oxzrf",
                "defaultMode": 420
              }
            }
          ],
          "containers": [
            {
              "name": "heapster",
              "image": "gcr.io/google_containers/heapster:v1.2.0",
              "command": [
                "/heapster",
                "--source=kubernetes.summary_api:''"
              ],
              "resources": {
                "limits": {
                  "cpu": "88m",
                  "memory": "204Mi"
                },
                "requests": {
                  "cpu": "88m",
                  "memory": "204Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "livenessProbe": {
                "httpGet": {
                  "path": "/healthz",
                  "port": 8082,
                  "scheme": "HTTP"
                },
                "initialDelaySeconds": 180,
                "timeoutSeconds": 5,
                "periodSeconds": 10,
                "successThreshold": 1,
                "failureThreshold": 3
              },
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            },
            {
              "name": "heapster-nanny",
              "image": "gcr.io/google_containers/addon-resizer:1.6",
              "command": [
                "/pod_nanny",
                "--cpu=80m",
                "--extra-cpu=0.5m",
                "--memory=140Mi",
                "--extra-memory=4Mi",
                "--threshold=5",
                "--deployment=heapster-v1.2.0",
                "--container=heapster",
                "--poll-period=300000",
                "--estimator=exponential"
              ],
              "env": [
                {
                  "name": "MY_POD_NAME",
                  "valueFrom": {
                    "fieldRef": {
                      "apiVersion": "v1",
                      "fieldPath": "metadata.name"
                    }
                  }
                },
                {
                  "name": "MY_POD_NAMESPACE",
                  "valueFrom": {
                    "fieldRef": {
                      "apiVersion": "v1",
                      "fieldPath": "metadata.namespace"
                    }
                  }
                }
              ],
              "resources": {
                "limits": {
                  "cpu": "50m",
                  "memory": "92960Ki"
                },
                "requests": {
                  "cpu": "50m",
                  "memory": "92960Ki"
                }
              },
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "ClusterFirst",
          "serviceAccountName": "default",
          "serviceAccount": "default",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-9rhk",
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:36:39Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:37:06Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:36:39Z"
            }
          ],
          "hostIP": "10.128.0.4",
          "podIP": "10.104.1.4",
          "startTime": "2016-11-13T19:36:39Z",
          "containerStatuses": [
            {
              "name": "heapster",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:37:06Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/heapster:v1.2.0",
              "imageID": "docker://sha256:7cd51f2f6a9741aee93a73dfc48ee22db540a8c8d08147e0ee23ddeef10e9442",
              "containerID": "docker://0f6fcbab45c295634cc7c34b3afd5c3e74c0a2ad1464286271c80dde6b3f3c4a"
            },
            {
              "name": "heapster-nanny",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:50Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/addon-resizer:1.6",
              "imageID": "docker://sha256:83702063e552d5b557fbc09de90b665b58cdaf3a8a1b535b1767cc9492a0cc7e",
              "containerID": "docker://7da846fde966f77c923518c88474ef6682dfc0ed5822f946b0ffd9a83d213731"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "kube-dns-v20-d6xkr",
          "generateName": "kube-dns-v20-",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/kube-dns-v20-d6xkr",
          "uid": "3ae3b672-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "322",
          "creationTimestamp": "2016-11-13T19:34:44Z",
          "labels": {
            "k8s-app": "kube-dns",
            "version": "v20"
          },
          "annotations": {
            "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicationController\",\"namespace\":\"kube-system\",\"name\":\"kube-dns-v20\",\"uid\":\"3ae1dd07-a9d8-11e6-b428-42010af00141\",\"apiVersion\":\"v1\",\"resourceVersion\":\"136\"}}\n",
            "scheduler.alpha.kubernetes.io/critical-pod": "",
            "scheduler.alpha.kubernetes.io/tolerations": "[{\"key\":\"CriticalAddonsOnly\", \"operator\":\"Exists\"}]"
          },
          "ownerReferences": [
            {
              "apiVersion": "v1",
              "kind": "ReplicationController",
              "name": "kube-dns-v20",
              "uid": "3ae1dd07-a9d8-11e6-b428-42010af00141",
              "controller": true
            }
          ]
        },
        "spec": {
          "volumes": [
            {
              "name": "default-token-oxzrf",
              "secret": {
                "secretName": "default-token-oxzrf",
                "defaultMode": 420
              }
            }
          ],
          "containers": [
            {
              "name": "kubedns",
              "image": "gcr.io/google_containers/kubedns-amd64:1.8",
              "args": [
                "--domain=cluster.local.",
                "--dns-port=10053"
              ],
              "ports": [
                {
                  "name": "dns-local",
                  "containerPort": 10053,
                  "protocol": "UDP"
                },
                {
                  "name": "dns-tcp-local",
                  "containerPort": 10053,
                  "protocol": "TCP"
                }
              ],
              "resources": {
                "limits": {
                  "memory": "170Mi"
                },
                "requests": {
                  "cpu": "100m",
                  "memory": "70Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "livenessProbe": {
                "httpGet": {
                  "path": "/healthz-kubedns",
                  "port": 8080,
                  "scheme": "HTTP"
                },
                "initialDelaySeconds": 60,
                "timeoutSeconds": 5,
                "periodSeconds": 10,
                "successThreshold": 1,
                "failureThreshold": 5
              },
              "readinessProbe": {
                "httpGet": {
                  "path": "/readiness",
                  "port": 8081,
                  "scheme": "HTTP"
                },
                "initialDelaySeconds": 3,
                "timeoutSeconds": 5,
                "periodSeconds": 10,
                "successThreshold": 1,
                "failureThreshold": 3
              },
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            },
            {
              "name": "dnsmasq",
              "image": "gcr.io/google_containers/kube-dnsmasq-amd64:1.4",
              "args": [
                "--cache-size=1000",
                "--no-resolv",
                "--server=127.0.0.1#10053",
                "--log-facility=-"
              ],
              "ports": [
                {
                  "name": "dns",
                  "containerPort": 53,
                  "protocol": "UDP"
                },
                {
                  "name": "dns-tcp",
                  "containerPort": 53,
                  "protocol": "TCP"
                }
              ],
              "resources": {},
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "livenessProbe": {
                "httpGet": {
                  "path": "/healthz-dnsmasq",
                  "port": 8080,
                  "scheme": "HTTP"
                },
                "initialDelaySeconds": 60,
                "timeoutSeconds": 5,
                "periodSeconds": 10,
                "successThreshold": 1,
                "failureThreshold": 5
              },
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            },
            {
              "name": "healthz",
              "image": "gcr.io/google_containers/exechealthz-amd64:1.2",
              "args": [
                "--cmd=nslookup kubernetes.default.svc.cluster.local 127.0.0.1 \u003e/dev/null",
                "--url=/healthz-dnsmasq",
                "--cmd=nslookup kubernetes.default.svc.cluster.local 127.0.0.1:10053 \u003e/dev/null",
                "--url=/healthz-kubedns",
                "--port=8080",
                "--quiet"
              ],
              "ports": [
                {
                  "containerPort": 8080,
                  "protocol": "TCP"
                }
              ],
              "resources": {
                "limits": {
                  "memory": "50Mi"
                },
                "requests": {
                  "cpu": "10m",
                  "memory": "50Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "Default",
          "serviceAccountName": "default",
          "serviceAccount": "default",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-51cp",
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:20Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:36:20Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:15Z"
            }
          ],
          "hostIP": "10.128.0.2",
          "podIP": "10.104.0.4",
          "startTime": "2016-11-13T19:35:20Z",
          "containerStatuses": [
            {
              "name": "dnsmasq",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:35:23Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/kube-dnsmasq-amd64:1.4",
              "imageID": "docker://sha256:3ec65756a89b70b4095e43a340a6e2d5696cac7a93a29619ff5c4b6be9af2773",
              "containerID": "docker://6494e5c0af23363236b87db97dbba31ae3574723bb2462598944d33414d62215"
            },
            {
              "name": "healthz",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:13Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/exechealthz-amd64:1.2",
              "imageID": "docker://sha256:93a43bfb39bfe9795e76ccd75d7a0e6d40e2ae8563456a2a77c1b4cfc3bbd967",
              "containerID": "docker://0b71fc1b9eaaed54f1b4aa6f45cb6305eb32652fb1aa88629a3bbc9349cebb11"
            },
            {
              "name": "kubedns",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:15Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/kubedns-amd64:1.8",
              "imageID": "docker://sha256:597a45ef55ec52401fdcd2e1d6ee53c74b04afb264490d7fa67b6d98ad330dfe",
              "containerID": "docker://d30f7d699843e2583858814964d3c26b8b5c8a564d8f6d4be6f29a610d2a2847"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "kube-dns-v20-ehght",
          "generateName": "kube-dns-v20-",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/kube-dns-v20-ehght",
          "uid": "3ae36064-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "319",
          "creationTimestamp": "2016-11-13T19:34:44Z",
          "labels": {
            "k8s-app": "kube-dns",
            "version": "v20"
          },
          "annotations": {
            "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicationController\",\"namespace\":\"kube-system\",\"name\":\"kube-dns-v20\",\"uid\":\"3ae1dd07-a9d8-11e6-b428-42010af00141\",\"apiVersion\":\"v1\",\"resourceVersion\":\"136\"}}\n",
            "scheduler.alpha.kubernetes.io/critical-pod": "",
            "scheduler.alpha.kubernetes.io/tolerations": "[{\"key\":\"CriticalAddonsOnly\", \"operator\":\"Exists\"}]"
          },
          "ownerReferences": [
            {
              "apiVersion": "v1",
              "kind": "ReplicationController",
              "name": "kube-dns-v20",
              "uid": "3ae1dd07-a9d8-11e6-b428-42010af00141",
              "controller": true
            }
          ]
        },
        "spec": {
          "volumes": [
            {
              "name": "default-token-oxzrf",
              "secret": {
                "secretName": "default-token-oxzrf",
                "defaultMode": 420
              }
            }
          ],
          "containers": [
            {
              "name": "kubedns",
              "image": "gcr.io/google_containers/kubedns-amd64:1.8",
              "args": [
                "--domain=cluster.local.",
                "--dns-port=10053"
              ],
              "ports": [
                {
                  "name": "dns-local",
                  "containerPort": 10053,
                  "protocol": "UDP"
                },
                {
                  "name": "dns-tcp-local",
                  "containerPort": 10053,
                  "protocol": "TCP"
                }
              ],
              "resources": {
                "limits": {
                  "memory": "170Mi"
                },
                "requests": {
                  "cpu": "100m",
                  "memory": "70Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "livenessProbe": {
                "httpGet": {
                  "path": "/healthz-kubedns",
                  "port": 8080,
                  "scheme": "HTTP"
                },
                "initialDelaySeconds": 60,
                "timeoutSeconds": 5,
                "periodSeconds": 10,
                "successThreshold": 1,
                "failureThreshold": 5
              },
              "readinessProbe": {
                "httpGet": {
                  "path": "/readiness",
                  "port": 8081,
                  "scheme": "HTTP"
                },
                "initialDelaySeconds": 3,
                "timeoutSeconds": 5,
                "periodSeconds": 10,
                "successThreshold": 1,
                "failureThreshold": 3
              },
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            },
            {
              "name": "dnsmasq",
              "image": "gcr.io/google_containers/kube-dnsmasq-amd64:1.4",
              "args": [
                "--cache-size=1000",
                "--no-resolv",
                "--server=127.0.0.1#10053",
                "--log-facility=-"
              ],
              "ports": [
                {
                  "name": "dns",
                  "containerPort": 53,
                  "protocol": "UDP"
                },
                {
                  "name": "dns-tcp",
                  "containerPort": 53,
                  "protocol": "TCP"
                }
              ],
              "resources": {},
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "livenessProbe": {
                "httpGet": {
                  "path": "/healthz-dnsmasq",
                  "port": 8080,
                  "scheme": "HTTP"
                },
                "initialDelaySeconds": 60,
                "timeoutSeconds": 5,
                "periodSeconds": 10,
                "successThreshold": 1,
                "failureThreshold": 5
              },
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            },
            {
              "name": "healthz",
              "image": "gcr.io/google_containers/exechealthz-amd64:1.2",
              "args": [
                "--cmd=nslookup kubernetes.default.svc.cluster.local 127.0.0.1 \u003e/dev/null",
                "--url=/healthz-dnsmasq",
                "--cmd=nslookup kubernetes.default.svc.cluster.local 127.0.0.1:10053 \u003e/dev/null",
                "--url=/healthz-kubedns",
                "--port=8080",
                "--quiet"
              ],
              "ports": [
                {
                  "containerPort": 8080,
                  "protocol": "TCP"
                }
              ],
              "resources": {
                "limits": {
                  "memory": "50Mi"
                },
                "requests": {
                  "cpu": "10m",
                  "memory": "50Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "Default",
          "serviceAccountName": "default",
          "serviceAccount": "default",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-51cp",
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:20Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:36:20Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:15Z"
            }
          ],
          "hostIP": "10.128.0.2",
          "podIP": "10.104.0.5",
          "startTime": "2016-11-13T19:35:20Z",
          "containerStatuses": [
            {
              "name": "dnsmasq",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:35:23Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/kube-dnsmasq-amd64:1.4",
              "imageID": "docker://sha256:3ec65756a89b70b4095e43a340a6e2d5696cac7a93a29619ff5c4b6be9af2773",
              "containerID": "docker://3207d93766e9b82636d2a76e3cecbf0fd0405928e5f23c46ceae9e6ab04d8570"
            },
            {
              "name": "healthz",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:12Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/exechealthz-amd64:1.2",
              "imageID": "docker://sha256:93a43bfb39bfe9795e76ccd75d7a0e6d40e2ae8563456a2a77c1b4cfc3bbd967",
              "containerID": "docker://e797d6bd0310f22b91e6ba95e784e877b5226d20f4562b3163f9d45990dab83d"
            },
            {
              "name": "kubedns",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:15Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/kubedns-amd64:1.8",
              "imageID": "docker://sha256:597a45ef55ec52401fdcd2e1d6ee53c74b04afb264490d7fa67b6d98ad330dfe",
              "containerID": "docker://7cb14bce45430a256dedafb22b66da2c922b274fd295b53c53dd6bca62718822"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "kube-proxy-gke-cluster-kap-default-pool-07c56901-51cp",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/kube-proxy-gke-cluster-kap-default-pool-07c56901-51cp",
          "uid": "50071224-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "206",
          "creationTimestamp": "2016-11-13T19:35:20Z",
          "labels": {
            "component": "kube-proxy",
            "tier": "node"
          },
          "annotations": {
            "kubernetes.io/config.hash": "07a907cc99c2cb7cee1ab3783ec71afe",
            "kubernetes.io/config.mirror": "07a907cc99c2cb7cee1ab3783ec71afe",
            "kubernetes.io/config.seen": "2016-11-13T19:34:45.104581031Z",
            "kubernetes.io/config.source": "file"
          }
        },
        "spec": {
          "volumes": [
            {
              "name": "ssl-certs-host",
              "hostPath": {
                "path": "/usr/share/ca-certificates"
              }
            },
            {
              "name": "kubeconfig",
              "hostPath": {
                "path": "/var/lib/kube-proxy/kubeconfig"
              }
            },
            {
              "name": "varlog",
              "hostPath": {
                "path": "/var/log"
              }
            }
          ],
          "containers": [
            {
              "name": "kube-proxy",
              "image": "gcr.io/google_containers/kube-proxy:604c3cbc73e98642406245f4fff461ee",
              "command": [
                "/bin/sh",
                "-c",
                "kube-proxy --master=https://104.198.147.93 --kubeconfig=/var/lib/kube-proxy/kubeconfig --cluster-cidr=10.104.0.0/14 --resource-container=\"\" --v=2 1\u003e\u003e/var/log/kube-proxy.log 2\u003e\u00261"
              ],
              "resources": {
                "requests": {
                  "cpu": "100m"
                }
              },
              "volumeMounts": [
                {
                  "name": "ssl-certs-host",
                  "readOnly": true,
                  "mountPath": "/etc/ssl/certs"
                },
                {
                  "name": "varlog",
                  "mountPath": "/var/log"
                },
                {
                  "name": "kubeconfig",
                  "mountPath": "/var/lib/kube-proxy/kubeconfig"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent",
              "securityContext": {
                "privileged": true
              }
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "ClusterFirst",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-51cp",
          "hostNetwork": true,
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:20Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:22Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:20Z"
            }
          ],
          "hostIP": "10.128.0.2",
          "podIP": "10.128.0.2",
          "startTime": "2016-11-13T19:35:20Z",
          "containerStatuses": [
            {
              "name": "kube-proxy",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:35:21Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/kube-proxy:604c3cbc73e98642406245f4fff461ee",
              "imageID": "docker://sha256:c07e57cb3c9ee9ef63bae4893f8990938907446e72a2bd86784fcc0e62770afc",
              "containerID": "docker://39d7b86d56d4834e0d2405cb91a15643fc3ab557e51065519adee53970c9d24d"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "kube-proxy-gke-cluster-kap-default-pool-07c56901-9rhk",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/kube-proxy-gke-cluster-kap-default-pool-07c56901-9rhk",
          "uid": "5215434b-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "218",
          "creationTimestamp": "2016-11-13T19:35:23Z",
          "labels": {
            "component": "kube-proxy",
            "tier": "node"
          },
          "annotations": {
            "kubernetes.io/config.hash": "07a907cc99c2cb7cee1ab3783ec71afe",
            "kubernetes.io/config.mirror": "07a907cc99c2cb7cee1ab3783ec71afe",
            "kubernetes.io/config.seen": "2016-11-13T19:34:48.562845745Z",
            "kubernetes.io/config.source": "file"
          }
        },
        "spec": {
          "volumes": [
            {
              "name": "ssl-certs-host",
              "hostPath": {
                "path": "/usr/share/ca-certificates"
              }
            },
            {
              "name": "kubeconfig",
              "hostPath": {
                "path": "/var/lib/kube-proxy/kubeconfig"
              }
            },
            {
              "name": "varlog",
              "hostPath": {
                "path": "/var/log"
              }
            }
          ],
          "containers": [
            {
              "name": "kube-proxy",
              "image": "gcr.io/google_containers/kube-proxy:604c3cbc73e98642406245f4fff461ee",
              "command": [
                "/bin/sh",
                "-c",
                "kube-proxy --master=https://104.198.147.93 --kubeconfig=/var/lib/kube-proxy/kubeconfig --cluster-cidr=10.104.0.0/14 --resource-container=\"\" --v=2 1\u003e\u003e/var/log/kube-proxy.log 2\u003e\u00261"
              ],
              "resources": {
                "requests": {
                  "cpu": "100m"
                }
              },
              "volumeMounts": [
                {
                  "name": "ssl-certs-host",
                  "readOnly": true,
                  "mountPath": "/etc/ssl/certs"
                },
                {
                  "name": "varlog",
                  "mountPath": "/var/log"
                },
                {
                  "name": "kubeconfig",
                  "mountPath": "/var/lib/kube-proxy/kubeconfig"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent",
              "securityContext": {
                "privileged": true
              }
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "ClusterFirst",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-9rhk",
          "hostNetwork": true,
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:25Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:25Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:23Z"
            }
          ],
          "hostIP": "10.128.0.4",
          "podIP": "10.128.0.4",
          "startTime": "2016-11-13T19:35:25Z",
          "containerStatuses": [
            {
              "name": "kube-proxy",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:35:25Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/kube-proxy:604c3cbc73e98642406245f4fff461ee",
              "imageID": "docker://sha256:c07e57cb3c9ee9ef63bae4893f8990938907446e72a2bd86784fcc0e62770afc",
              "containerID": "docker://2ed435196851fa5f505a2d192cfb435232d83339d0e7e1663c86f268f1467c37"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "kube-proxy-gke-cluster-kap-default-pool-07c56901-n74b",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/kube-proxy-gke-cluster-kap-default-pool-07c56901-n74b",
          "uid": "532957fa-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "228",
          "creationTimestamp": "2016-11-13T19:35:25Z",
          "labels": {
            "component": "kube-proxy",
            "tier": "node"
          },
          "annotations": {
            "kubernetes.io/config.hash": "07a907cc99c2cb7cee1ab3783ec71afe",
            "kubernetes.io/config.mirror": "07a907cc99c2cb7cee1ab3783ec71afe",
            "kubernetes.io/config.seen": "2016-11-13T19:34:50.341129531Z",
            "kubernetes.io/config.source": "file"
          }
        },
        "spec": {
          "volumes": [
            {
              "name": "ssl-certs-host",
              "hostPath": {
                "path": "/usr/share/ca-certificates"
              }
            },
            {
              "name": "kubeconfig",
              "hostPath": {
                "path": "/var/lib/kube-proxy/kubeconfig"
              }
            },
            {
              "name": "varlog",
              "hostPath": {
                "path": "/var/log"
              }
            }
          ],
          "containers": [
            {
              "name": "kube-proxy",
              "image": "gcr.io/google_containers/kube-proxy:604c3cbc73e98642406245f4fff461ee",
              "command": [
                "/bin/sh",
                "-c",
                "kube-proxy --master=https://104.198.147.93 --kubeconfig=/var/lib/kube-proxy/kubeconfig --cluster-cidr=10.104.0.0/14 --resource-container=\"\" --v=2 1\u003e\u003e/var/log/kube-proxy.log 2\u003e\u00261"
              ],
              "resources": {
                "requests": {
                  "cpu": "100m"
                }
              },
              "volumeMounts": [
                {
                  "name": "ssl-certs-host",
                  "readOnly": true,
                  "mountPath": "/etc/ssl/certs"
                },
                {
                  "name": "varlog",
                  "mountPath": "/var/log"
                },
                {
                  "name": "kubeconfig",
                  "mountPath": "/var/lib/kube-proxy/kubeconfig"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent",
              "securityContext": {
                "privileged": true
              }
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "ClusterFirst",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-n74b",
          "hostNetwork": true,
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:32Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:32Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:25Z"
            }
          ],
          "hostIP": "10.128.0.3",
          "podIP": "10.128.0.3",
          "startTime": "2016-11-13T19:35:32Z",
          "containerStatuses": [
            {
              "name": "kube-proxy",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:35:26Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/kube-proxy:604c3cbc73e98642406245f4fff461ee",
              "imageID": "docker://sha256:c07e57cb3c9ee9ef63bae4893f8990938907446e72a2bd86784fcc0e62770afc",
              "containerID": "docker://6971201060dbc811ab36493705676555dc6592345f28982f9c24b77d8b26a176"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "kubernetes-dashboard-v1.4.0-6rkpn",
          "generateName": "kubernetes-dashboard-v1.4.0-",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/kubernetes-dashboard-v1.4.0-6rkpn",
          "uid": "3a950063-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "328",
          "creationTimestamp": "2016-11-13T19:34:44Z",
          "labels": {
            "k8s-app": "kubernetes-dashboard",
            "kubernetes.io/cluster-service": "true",
            "version": "v1.4.0"
          },
          "annotations": {
            "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicationController\",\"namespace\":\"kube-system\",\"name\":\"kubernetes-dashboard-v1.4.0\",\"uid\":\"3a937fef-a9d8-11e6-b428-42010af00141\",\"apiVersion\":\"v1\",\"resourceVersion\":\"108\"}}\n",
            "scheduler.alpha.kubernetes.io/critical-pod": "",
            "scheduler.alpha.kubernetes.io/tolerations": "[{\"key\":\"CriticalAddonsOnly\", \"operator\":\"Exists\"}]"
          },
          "ownerReferences": [
            {
              "apiVersion": "v1",
              "kind": "ReplicationController",
              "name": "kubernetes-dashboard-v1.4.0",
              "uid": "3a937fef-a9d8-11e6-b428-42010af00141",
              "controller": true
            }
          ]
        },
        "spec": {
          "volumes": [
            {
              "name": "default-token-oxzrf",
              "secret": {
                "secretName": "default-token-oxzrf",
                "defaultMode": 420
              }
            }
          ],
          "containers": [
            {
              "name": "kubernetes-dashboard",
              "image": "gcr.io/google_containers/kubernetes-dashboard-amd64:v1.4.0",
              "ports": [
                {
                  "containerPort": 9090,
                  "protocol": "TCP"
                }
              ],
              "resources": {
                "limits": {
                  "cpu": "100m",
                  "memory": "50Mi"
                },
                "requests": {
                  "cpu": "100m",
                  "memory": "50Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "livenessProbe": {
                "httpGet": {
                  "path": "/",
                  "port": 9090,
                  "scheme": "HTTP"
                },
                "initialDelaySeconds": 30,
                "timeoutSeconds": 30,
                "periodSeconds": 10,
                "successThreshold": 1,
                "failureThreshold": 3
              },
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "ClusterFirst",
          "serviceAccountName": "default",
          "serviceAccount": "default",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-9rhk",
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:47Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:36:22Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:47Z"
            }
          ],
          "hostIP": "10.128.0.4",
          "podIP": "10.104.1.3",
          "startTime": "2016-11-13T19:35:47Z",
          "containerStatuses": [
            {
              "name": "kubernetes-dashboard",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:21Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/kubernetes-dashboard-amd64:v1.4.0",
              "imageID": "docker://sha256:436faaeba2e2071e45809ae4416aa3c19cb197be1eb2ff3ce89fc6793702c63b",
              "containerID": "docker://7b5a9d8d64129062435aaa8f156b8d4ee5d13dd8ba47c87338cc3cabe4ec8756"
            }
          ]
        }
      },
      {
        "metadata": {
          "name": "l7-default-backend-v1.0-oc4uq",
          "generateName": "l7-default-backend-v1.0-",
          "namespace": "kube-system",
          "selfLink": "/api/v1/namespaces/kube-system/pods/l7-default-backend-v1.0-oc4uq",
          "uid": "3ad187d8-a9d8-11e6-b428-42010af00141",
          "resourceVersion": "306",
          "creationTimestamp": "2016-11-13T19:34:44Z",
          "labels": {
            "k8s-app": "glbc",
            "kubernetes.io/cluster-service": "true",
            "name": "glbc",
            "version": "v1.0"
          },
          "annotations": {
            "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicationController\",\"namespace\":\"kube-system\",\"name\":\"l7-default-backend-v1.0\",\"uid\":\"3ad06530-a9d8-11e6-b428-42010af00141\",\"apiVersion\":\"v1\",\"resourceVersion\":\"130\"}}\n"
          },
          "ownerReferences": [
            {
              "apiVersion": "v1",
              "kind": "ReplicationController",
              "name": "l7-default-backend-v1.0",
              "uid": "3ad06530-a9d8-11e6-b428-42010af00141",
              "controller": true
            }
          ]
        },
        "spec": {
          "volumes": [
            {
              "name": "default-token-oxzrf",
              "secret": {
                "secretName": "default-token-oxzrf",
                "defaultMode": 420
              }
            }
          ],
          "containers": [
            {
              "name": "default-http-backend",
              "image": "gcr.io/google_containers/defaultbackend:1.0",
              "ports": [
                {
                  "containerPort": 8080,
                  "protocol": "TCP"
                }
              ],
              "resources": {
                "limits": {
                  "cpu": "10m",
                  "memory": "20Mi"
                },
                "requests": {
                  "cpu": "10m",
                  "memory": "20Mi"
                }
              },
              "volumeMounts": [
                {
                  "name": "default-token-oxzrf",
                  "readOnly": true,
                  "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }
              ],
              "livenessProbe": {
                "httpGet": {
                  "path": "/healthz",
                  "port": 8080,
                  "scheme": "HTTP"
                },
                "initialDelaySeconds": 30,
                "timeoutSeconds": 5,
                "periodSeconds": 10,
                "successThreshold": 1,
                "failureThreshold": 3
              },
              "terminationMessagePath": "/dev/termination-log",
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "ClusterFirst",
          "serviceAccountName": "default",
          "serviceAccount": "default",
          "nodeName": "gke-cluster-kap-default-pool-07c56901-51cp",
          "securityContext": {}
        },
        "status": {
          "phase": "Running",
          "conditions": [
            {
              "type": "Initialized",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:20Z"
            },
            {
              "type": "Ready",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:36:15Z"
            },
            {
              "type": "PodScheduled",
              "status": "True",
              "lastProbeTime": null,
              "lastTransitionTime": "2016-11-13T19:35:15Z"
            }
          ],
          "hostIP": "10.128.0.2",
          "podIP": "10.104.0.2",
          "startTime": "2016-11-13T19:35:20Z",
          "containerStatuses": [
            {
              "name": "default-http-backend",
              "state": {
                "running": {
                  "startedAt": "2016-11-13T19:36:15Z"
                }
              },
              "lastState": {},
              "ready": true,
              "restartCount": 0,
              "image": "gcr.io/google_containers/defaultbackend:1.0",
              "imageID": "docker://sha256:279ab580ac70642e42b993224984632bd81b5e4d09b951dd5dd62003abcd290a",
              "containerID": "docker://a1929aca074bf40131e6424205fe941299395abf8f690742d4bdfc29fcd1a063"
            }
          ]
        }
      }
    ]
  }
]